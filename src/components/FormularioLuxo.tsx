// import emailjs from '@emailjs/browser'; // desativado — usando apenas Brevo
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';
import './FormularioLuxo.css';

type Fields = 'firstName' | 'lastName' | 'email' | 'phone' | 'message' | 'country';

// País → { label, DDI }
const COUNTRIES = [
  { code: 'BR', label: '🇧🇷 Brasil', ddi: '55' },
  { code: 'US', label: '🇺🇸 Estados Unidos', ddi: '1' },
  { code: 'PT', label: '🇵🇹 Portugal', ddi: '351' },
  { code: 'AR', label: '🇦🇷 Argentina', ddi: '54' },
  { code: 'UY', label: '🇺🇾 Uruguai', ddi: '598' },
  { code: 'PY', label: '🇵🇾 Paraguai', ddi: '595' },
  { code: 'CL', label: '🇨🇱 Chile', ddi: '56' },
  { code: 'CO', label: '🇨🇴 Colômbia', ddi: '57' },
  { code: 'MX', label: '🇲🇽 México', ddi: '52' },
  { code: 'DE', label: '🇩🇪 Alemanha', ddi: '49' },
  { code: 'FR', label: '🇫🇷 França', ddi: '33' },
  { code: 'GB', label: '🇬🇧 Reino Unido', ddi: '44' },
  { code: 'IT', label: '🇮🇹 Itália', ddi: '39' },
  { code: 'ES', label: '🇪🇸 Espanha', ddi: '34' },
  { code: 'NL', label: '🇳🇱 Holanda', ddi: '31' },
  { code: 'CH', label: '🇨🇭 Suíça', ddi: '41' },
  { code: 'AU', label: '🇦🇺 Austrália', ddi: '61' },
  { code: 'CA', label: '🇨🇦 Canadá', ddi: '1' },
  { code: 'OTHER', label: '🌍 Outro', ddi: '' },
] as const;

export default function FormularioLuxo() {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [selectedCountry, setSelectedCountry] = useState('BR');

  const validate = (form: HTMLFormElement): Partial<Record<Fields, string>> => {
    const data = new FormData(form);
    const errs: Partial<Record<Fields, string>> = {};

    if (!data.get('firstName')?.toString().trim())
      errs.firstName = t('form.errors.first');
    if (!data.get('lastName')?.toString().trim())
      errs.lastName = t('form.errors.last');

    const email = data.get('email')?.toString().trim() ?? '';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = t('form.errors.email');

    if (!data.get('phone')?.toString().trim())
      errs.phone = t('form.errors.phone');
    if (!data.get('message')?.toString().trim())
      errs.message = t('form.errors.message');

    return errs;
  };

  const sendToBrevo = async (formData: FormData) => {
    const firstName = formData.get('firstName')?.toString().trim() ?? '';
    const lastName = formData.get('lastName')?.toString().trim() ?? '';
    const fullName = [firstName, lastName].filter(Boolean).join(' ');

    const countryData = COUNTRIES.find(c => c.code === selectedCountry);
    const countryLabel = countryData?.label ?? selectedCountry;
    const countryDdi = countryData?.ddi ?? '';

    const payload = {
      name: fullName,
      email: formData.get('email')?.toString().trim() ?? '',
      mobile_phone: formData.get('phone')?.toString().trim() ?? '',
      message: formData.get('message')?.toString().trim() ?? '',
      paisEstado: countryLabel,
      countryDdi,
    };

    const res = await fetch('/api/brevo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    let json: unknown = null;
    try { json = text ? JSON.parse(text) : null; } catch { json = text; }

    if (!res.ok) {
      console.warn('[brevo] non-ok response:', res.status, json);
      throw new Error(`Brevo error ${res.status}`);
    }

    console.log('[brevo] contact registered:', json);
  };


  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const errs = validate(formRef.current);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSending(true);

    const formData = new FormData(formRef.current);

    // --- EmailJS desativado temporariamente ---
    // emailjs.sendForm('service_lr09pp8', 'template_e800aaa', formRef.current, 'Gv7fqaOjlowe6NdnI')

    // Envia apenas para o Brevo
    try {
      await sendToBrevo(formData);
      toast.success(t('form.success', 'Mensagem recebida com sucesso!'), {
        duration: 8000,
        style: { background: '#111827', color: '#C4B096', border: '1px solid rgba(196, 176, 150, 0.3)' },
        iconTheme: { primary: '#C4B096', secondary: '#111827' },
      });
      setIsSent(true);
      formRef.current?.reset();
      setTimeout(() => setIsSent(false), 8000);
    } catch (err) {
      console.error('Erro ao enviar para o Brevo:', err);
      toast.error('Ocorreu um erro no envio. Tente novamente mais tarde.');
    } finally {
      setIsSending(false);
    }
  };

  const clearError = (field: Fields) => {
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contato" className="formulario-luxo-section">
      <Toaster position="bottom-center" />
      <div className="formulario-luxo-overlay" aria-hidden="true" />
      <div className="formulario-luxo-content">
        <span className="formulario-luxo-pill reveal-badge">{t('form.badge')}</span>
        <h2 className="formulario-luxo-title reveal-heading" dangerouslySetInnerHTML={{ __html: t('form.title') }}></h2>
        <p className="formulario-luxo-subtitle reveal-subtext">
          {t('form.subtitle')}
        </p>

        <form ref={formRef} className="formulario-luxo-card reveal-subtext" style={{ transitionDelay: '0.6s' }} onSubmit={sendEmail} noValidate>
          <div className="formulario-luxo-grid">
            <label>
              <input
                type="text"
                name="firstName"
                placeholder={t('form.fields.first')}
                onChange={() => clearError('firstName')}
                className={errors.firstName ? 'field-error' : ''}
              />
              {errors.firstName && <span className="formulario-error">{errors.firstName}</span>}
            </label>

            <label>
              <input
                type="text"
                name="lastName"
                placeholder={t('form.fields.last')}
                onChange={() => clearError('lastName')}
                className={errors.lastName ? 'field-error' : ''}
              />
              {errors.lastName && <span className="formulario-error">{errors.lastName}</span>}
            </label>

            <label>
              <input
                type="email"
                name="email"
                placeholder={t('form.fields.email')}
                onChange={() => clearError('email')}
                className={errors.email ? 'field-error' : ''}
              />
              {errors.email && <span className="formulario-error">{errors.email}</span>}
            </label>

            <div className="formulario-phone-group">
              <select
                className="formulario-country-select"
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
                aria-label="País"
              >
                {COUNTRIES.map(c => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder={t('form.fields.phone')}
                onChange={() => clearError('phone')}
                className={`formulario-phone-input ${errors.phone ? 'field-error' : ''}`}
              />
              {errors.phone && <span className="formulario-error" style={{ position: 'absolute', bottom: '-20px', left: 0 }}>{errors.phone}</span>}
            </div>
          </div>

          <label className="formulario-luxo-message">
            <textarea
              name="message"
              placeholder={t('form.message')}
              rows={4}
              onChange={() => clearError('message')}
              className={errors.message ? 'field-error' : ''}
            />
            {errors.message && <span className="formulario-error">{errors.message}</span>}
          </label>

          <button type="submit" className="formulario-luxo-submit" disabled={isSending}>
            {isSending ? 'Enviando...' : isSent ? 'Mensagem Enviada!' : (t('form.submit') || 'Enviar Mensagem')}
          </button>
        </form>
      </div>
    </section>
  );
}
