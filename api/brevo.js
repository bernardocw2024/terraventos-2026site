/**
 * Normaliza um número de telefone para o formato E.164 exigido pela Brevo.
 * Exemplos aceitos: "(85) 99999-9999", "85999999999", "+5585999999999"
 * Retorna null se o número for inválido.
 */
function formatPhone(raw) {
  if (!raw) return null;

  // Remove tudo que não for dígito
  const digits = raw.replace(/\D/g, "");

  // Já tem DDI 55 + DDD + número: 12 (fixo) ou 13 (celular) dígitos
  if (digits.startsWith("55") && (digits.length === 12 || digits.length === 13)) {
    return `+${digits}`;
  }

  // Número brasileiro sem DDI: 10 (fixo) ou 11 dígitos (celular)
  if (digits.length === 10 || digits.length === 11) {
    return `+55${digits}`;
  }

  // Número internacional genérico (7-15 dígitos)
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

    const formattedPhone = formatPhone(body.mobile_phone || "");
    console.log("[brevo] formatted phone:", formattedPhone);

    // Separa o nome completo em primeiro e sobrenome
    const fullName = (body.name || "").trim();
    const spaceIdx = fullName.indexOf(" ");
    const firstName = spaceIdx > -1 ? fullName.slice(0, spaceIdx) : fullName;
    const lastName = spaceIdx > -1 ? fullName.slice(spaceIdx + 1) : "";

    // Mapeamento para os atributos existentes na conta Brevo
    const attributes = {
      NOME: firstName,           // campo nativo da conta Brevo
      SOBRENOME: lastName,       // campo nativo da conta Brevo
      MENSAGEM: body.message || "",
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

    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const responseText = await brevoRes.text();
    console.log("[brevo] response status:", brevoRes.status);
    console.log("[brevo] raw response text:", responseText);

    let responseJson = null;
    try {
      responseJson = JSON.parse(responseText);
    } catch {
      responseJson = responseText;
    }

    if (!brevoRes.ok) {
      console.error("[brevo] non-ok response from Brevo:", brevoRes.status);
      return res.status(500).json({
        error: true,
        status: brevoRes.status,
        body: responseJson,
      });
    }

    console.log("[brevo] contact created successfully", responseJson);
    return res.status(200).json({ success: true, brevo_response: responseJson });
  } catch (err) {
    console.error("[brevo] internal error:", err);
    return res.status(500).json({ error: "Erro interno", message: err?.message });
  }
}
