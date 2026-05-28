/**
 * Normaliza um número de telefone para o formato E.164 exigido pela Brevo.
 * Aceita um DDI opcional (ex: '1' para EUA, '351' para Portugal).
 * Se não informado, assume Brasil (+55).
 */
function formatPhone(raw, ddi = '55') {
  if (!raw) return null;

  // Remove tudo que não for dígito
  const digits = raw.replace(/\D/g, '');
  if (!digits) return null;

  // Já vem com o DDI completo (ex: +5511999...)
  if (digits.startsWith('55') && (digits.length === 12 || digits.length === 13)) {
    return `+${digits}`;
  }

  // Se o DDI é conhecido, usa ele para montar o E.164
  if (ddi && digits.length >= 6) {
    // Se o número já começa com o DDI, não duplica
    if (digits.startsWith(ddi)) {
      return `+${digits}`;
    }
    return `+${ddi}${digits}`;
  }

  // Fallback: número internacional genérico (7-15 dígitos)
  if (digits.length >= 7 && digits.length <= 15) {
    return `+${digits}`;
  }

  return null;
}

export default async function handler(req, res) {
  // Suporte a CORS para chamadas locais (dev)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const body = req.body || {};
    console.log("[brevo] incoming body:", JSON.stringify(body));

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID || "2";

    console.log("[brevo] BREVO_API_KEY present:", !!BREVO_API_KEY);

    if (!BREVO_API_KEY) {
      console.error("[brevo] missing BREVO_API_KEY");
      return res.status(500).json({ error: "BREVO_API_KEY não configurada" });
    }

    if (!body?.email) {
      console.warn("[brevo] missing email in request body");
      return res.status(400).json({ error: "Email é obrigatório" });
    }

    const formattedPhone = formatPhone(body.mobile_phone || '', body.countryDdi || '55');
    console.log("[brevo] formatted phone:", formattedPhone);

    // Separa o nome completo em primeiro e sobrenome
    const fullName = (body.name || "").trim();
    const spaceIdx = fullName.indexOf(" ");
    const firstName = spaceIdx > -1 ? fullName.slice(0, spaceIdx) : fullName;
    const lastName = spaceIdx > -1 ? fullName.slice(spaceIdx + 1) : "";

    // Mapeamento para os atributos existentes na conta Brevo
    const attributes = {
      NOME: firstName,
      SOBRENOME: lastName,
      MENSAGEM: body.message || '',
      PAIS_ESTADO: body.paisEstado || '',
    };

    // Só inclui SMS se o número for válido (evita erro 400 da Brevo)
    if (formattedPhone) {
      attributes.SMS = formattedPhone;
    }

    const payload = {
      email: body.email,
      listIds: [Number(BREVO_LIST_ID)],
      updateEnabled: true, // atualiza o contato se o email já existir
      attributes,
    };

    console.log("[brevo] payload:", JSON.stringify(payload));

    // Função auxiliar para chamar a API da Brevo
    const callBrevo = async (p) => {
      const r = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify(p),
      });
      const text = await r.text();
      let json = null;
      try { json = JSON.parse(text); } catch { json = text; }
      return { status: r.status, ok: r.ok, json };
    };

    let result = await callBrevo(payload);
    console.log("[brevo] response status:", result.status);
    console.log("[brevo] raw response:", JSON.stringify(result.json));

    // Se o SMS já está vinculado a outro contato, tenta sem o SMS
    if (
      !result.ok &&
      result.json?.code === "duplicate_parameter" &&
      result.json?.metadata?.duplicate_identifiers?.includes("SMS")
    ) {
      console.warn("[brevo] SMS duplicado — retentando sem o campo SMS");
      const payloadSemSMS = {
        ...payload,
        attributes: { ...payload.attributes },
      };
      delete payloadSemSMS.attributes.SMS;
      result = await callBrevo(payloadSemSMS);
      console.log("[brevo] retry status:", result.status);
      console.log("[brevo] retry response:", JSON.stringify(result.json));
    }

    if (!result.ok) {
      console.error("[brevo] non-ok response from Brevo:", result.status);
      return res.status(500).json({
        error: true,
        status: result.status,
        body: result.json,
      });
    }

    console.log("[brevo] contact created successfully", result.json);
    return res.status(200).json({ success: true, brevo_response: result.json });

  } catch (err) {
    console.error("[brevo] internal error:", err);
    return res.status(500).json({ error: "Erro interno", message: err?.message });
  }
}
