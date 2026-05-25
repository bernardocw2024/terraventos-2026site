import "./VentoAfavor.css";

interface VentoAfavorProps {
  onBack: () => void;
}

export default function VentoAfavor({ onBack }: VentoAfavorProps) {
  return (
    <div className="vaf-container">
      {/* Botão de retorno flutuante */}
      <button
        className="vaf-back-btn"
        onClick={onBack}
        aria-label="Voltar ao site Terra Ventos"
        title="Voltar ao site"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>Terra Ventos</span>
      </button>

      <iframe
        src="https://comunidade.terraventos.com.br/"
        title="Terra Ventos Comunidade — Vento a Favor"
        className="vaf-iframe"
        allow="autoplay; encrypted-media; fullscreen"
        loading="eager"
      />
    </div>
  );
}
