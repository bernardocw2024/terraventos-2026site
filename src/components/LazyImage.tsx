import { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  onLoad?: () => void;
}

/**
 * LazyImage Component
 *
 * Otimização de performance: Carrega imagens apenas quando ficam visíveis no viewport.
 * - priority={true}: Carrega imediatamente (use apenas na imagem hero/LCP)
 * - priority={false} (padrão): Usa IntersectionObserver para lazy load
 *
 * Benefícios:
 * - Reduz tempo de carregamento inicial
 * - Economiza banda para usuários que não scrollam
 * - Melhora LCP (Largest Contentful Paint) com priority
 */
export default function LazyImage({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
  onLoad,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [imageSrc, setImageSrc] = useState(priority ? src : undefined);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      // Se priority={true}, carrega imediatamente (ex: hero image)
      setImageSrc(src);
      setIsLoaded(true);
      return;
    }

    // Usar IntersectionObserver para lazy load
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "50px", // Começa a carregar 50px antes de entrar no viewport
        threshold: 0,
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${!isLoaded ? "lazy-loading" : "lazy-loaded"}`}
      width={width}
      height={height}
      onLoad={handleLoad}
      style={{
        opacity: isLoaded ? 1 : 0.7,
        transition: "opacity 0.3s ease-in-out",
      }}
    />
  );
}
