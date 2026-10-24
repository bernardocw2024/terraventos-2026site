import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import Player from '@vimeo/player';

type VideoGalleryProps = {
  videoSources: string[];
  videoThumbnails?: string[];
  mainImage: string;
  title: string;
  credits?: string;
  onOpenVideo?: (src: string) => void;
};

// A galeria toca vídeos do Vimeo, do Google Drive e do YouTube. Drive e YouTube não
// usam a API do player do Vimeo (sem evento "ended"), então o avanço automático por
// contagem regressiva só existe para fontes Vimeo.
function isDriveSource(src: string): boolean {
  return src.includes('drive.google.com');
}

// Aceita youtu.be/ID, youtube.com/watch?v=ID, /embed/ID e /shorts/ID.
function getYouTubeId(src: string): string | null {
  const match = src.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

function isVimeoSource(src: string): boolean {
  return !isDriveSource(src) && !getYouTubeId(src);
}

function getEmbedSrc(src: string): string {
  if (isDriveSource(src)) return src;
  const youTubeId = getYouTubeId(src);
  if (youTubeId) return `https://www.youtube-nocookie.com/embed/${youTubeId}?autoplay=1&rel=0&modestbranding=1`;
  return `${src}${src.includes('?') ? '&' : '?'}title=0&byline=0&portrait=0&badge=0&autoplay=1&dnt=1`;
}

function getThumbSrc(src: string, videoThumbnails: string[] | undefined, idx: number, mainImage: string): string {
  if (videoThumbnails?.[idx]) return videoThumbnails[idx];
  const youTubeId = getYouTubeId(src);
  if (youTubeId) return `https://i.ytimg.com/vi/${youTubeId}/hqdefault.jpg`;
  if (isVimeoSource(src)) {
    const vimeoId = src.split('/video/')[1]?.split('?')[0];
    if (vimeoId) return `https://vumbnail.com/${vimeoId}.jpg`;
  }
  return mainImage;
}

export default function VideoGallery({ videoSources, videoThumbnails, mainImage, title, credits }: VideoGalleryProps) {
  const { t } = useTranslation();
  const [isVideoAlbumOpen, setIsVideoAlbumOpen] = useState(false);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Initialize Vimeo player and listen for "ended" (Drive e YouTube não têm essa API — sem auto-avanço)
  useEffect(() => {
    if (playingIndex !== null && iframeRef.current && isVimeoSource(videoSources[playingIndex])) {
      const player = new Player(iframeRef.current);

      player.on('ended', () => {
        // Start 3-second countdown
        setCountdown(3);
      });

      return () => {
        player.destroy().catch(() => {});
      };
    }
  }, [playingIndex]);

  // Handle countdown
  useEffect(() => {
    if (countdown === null) return;
    
    if (countdown === 0) {
      setCountdown(null);
      setPlayingIndex(prev => {
        if (prev === null) return null;
        const nextIdx = prev + 1;
        if (nextIdx < videoSources.length) {
          return nextIdx;
        } else {
          // Reached the end, close the player and show gallery
          setIsVideoAlbumOpen(true);
          return null;
        }
      });
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(prev => prev !== null ? prev - 1 : null);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, videoSources.length]);

  if (!videoSources || videoSources.length === 0) return null;

  const openVideoAlbum = () => {
    setIsVideoAlbumOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoAlbum = () => {
    setIsVideoAlbumOpen(false);
    document.body.style.overflow = '';
  };

  const handleVideoClick = (idx: number) => {
    setCountdown(null);
    setPlayingIndex(idx);
    setIsVideoAlbumOpen(false); // Hide the gallery while playing
    document.body.style.overflow = 'hidden';
  };

  const closePlayer = () => {
    setCountdown(null);
    setPlayingIndex(null);
    setIsVideoAlbumOpen(true); // Return to the gallery
    document.body.style.overflow = 'hidden'; // keeps hidden for modal
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCountdown(null);
    setPlayingIndex(prev => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : videoSources.length - 1; // loop
    });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCountdown(null);
    setPlayingIndex(prev => {
      if (prev === null) return null;
      return prev < videoSources.length - 1 ? prev + 1 : 0; // loop
    });
  };

  const skipCountdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCountdown(null);
    setPlayingIndex(prev => {
      if (prev === null) return null;
      return prev < videoSources.length - 1 ? prev + 1 : 0; // loop
    });
  };

  return (
    <div className="pi-video-strip-section" style={{ marginTop: '2rem' }}>
      <h3 className="pi-section-subtitle">{t('pagina.videoGallery', 'Galeria de Vídeos')}</h3>
      
      <button className="pi-gallery-strip" onClick={openVideoAlbum} aria-label="Abrir galeria de vídeos" style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <div className="pi-gallery-strip-previews" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {videoSources.slice(0, 5).map((src, idx) => {
            const thumbUrl = getThumbSrc(src, videoThumbnails, idx, mainImage);
            return (
              <div key={idx} className="pi-gallery-strip-thumb" style={{ position: 'relative' }}>
                <img src={thumbUrl} alt={`Preview vídeo ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                  <svg viewBox="0 0 24 24" fill="white" style={{ width: '24px', height: '24px' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                {idx === 4 && videoSources.length > 5 && (
                  <div className="pi-gallery-strip-more" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                    <span>+{videoSources.length - 5}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="pi-gallery-strip-cta">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span className="pi-gallery-strip-label">{t('oportunidades.viewAllVideos', 'Ver todos os vídeos')}</span>
          <span className="pi-gallery-strip-count">{t('oportunidades.videosCount', { count: videoSources.length, defaultValue: `${videoSources.length} vídeos` })}</span>
        </div>
      </button>

      {credits && (
        <p className="pi-video-credits" style={{ marginTop: '8px', fontSize: '0.9rem', opacity: 0.7 }}>
          {credits}
        </p>
      )}

      {/* O Player Fullscreen */}
      {playingIndex !== null && createPortal(
        <div className="pi-lightbox" onClick={closePlayer} style={{ zIndex: 999999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', boxSizing: 'border-box' }}>
          <button className="pi-lightbox-close" onClick={closePlayer} aria-label="Voltar para a galeria" style={{ zIndex: 1000000 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div 
            className="pi-lightbox-video-wrapper"
            onClick={(e) => e.stopPropagation()} 
            style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '1200px', 
              aspectRatio: '16/9',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              backgroundColor: '#000'
            }}
          >
            <iframe
              key={`video-${playingIndex}`}
              ref={iframeRef}
              src={getEmbedSrc(videoSources[playingIndex])}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Full Screen Video"
              style={{ width: '100%', height: '100%', display: 'block', border: 'none' }}
            />

            {/* Countdown Overlay */}
            {countdown !== null && (
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.85)', color: 'white',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                zIndex: 20
              }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 300 }}>{t('pagina.nextVideoIn', 'O próximo vídeo começa em')}</p>
                <div style={{ fontSize: '6rem', fontWeight: 'bold', lineHeight: 1 }}>{countdown}</div>
                <button 
                  onClick={skipCountdown}
                  style={{
                    marginTop: '2rem', padding: '0.8rem 2.5rem', background: 'var(--gold, #C4B096)',
                    color: 'white', borderRadius: '4px', cursor: 'pointer', border: 'none',
                    fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px'
                  }}
                >
                  Pular
                </button>
              </div>
            )}

            {/* Prev Button */}
            <button 
              onClick={handlePrev} 
              style={{ 
                position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', 
                zIndex: 30, background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', 
                borderRadius: '50%', width: '48px', height: '48px', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseOver={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.9)')}
              onMouseOut={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.6)')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            {/* Next Button */}
            <button 
              onClick={handleNext} 
              style={{ 
                position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', 
                zIndex: 30, background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', 
                borderRadius: '50%', width: '48px', height: '48px', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseOver={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.9)')}
              onMouseOut={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.6)')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>,
        document.body
      )}

      {/* Modal da Galeria de Vídeos */}
      {isVideoAlbumOpen && createPortal(
        <div className="pi-album-modal">
          <div className="pi-album-header">
            <button className="pi-album-back" onClick={closeVideoAlbum} aria-label="Voltar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <div className="pi-album-info">
              <h3>{title} - Vídeos</h3>
              <span>{t('oportunidades.videosCount', { count: videoSources.length, defaultValue: `${videoSources.length} vídeos` })}</span>
            </div>
          </div>
          
          <div className="pi-album-content">
            <div className="pi-album-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px', padding: '16px' }}>
              {videoSources.map((src, idx) => {
                const thumbUrl = getThumbSrc(src, videoThumbnails, idx, mainImage);

                return (
                  <div key={idx} className="pi-album-item" onClick={() => handleVideoClick(idx)} style={{ position: 'relative', cursor: 'pointer', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden' }}>
                    <img src={thumbUrl} alt={`Vídeo ${idx + 1}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="pi-album-item-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 1, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
