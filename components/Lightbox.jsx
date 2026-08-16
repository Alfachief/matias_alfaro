"use client";

import { useEffect, useCallback } from "react";

/**
 * Lightbox reutilizable — estilo Magnific Popup (zoom + flechas + contador).
 * Soporta items de tipo imagen ({ type: 'image', src, caption }) o
 * video embebido ({ type: 'video', embedUrl, caption }).
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const current = items[index];

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [goPrev, goNext, onClose]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(10,9,8,0.95)" }}
      onClick={onClose}
    >
      {/* Cerrar */}
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-60"
        style={{ color: "#F3EFE7" }}
      >
        <span style={{ fontSize: 28, lineHeight: 1 }}>×</span>
      </button>

      {/* Contador */}
      <span
        className="absolute top-6 left-6 md:top-8 md:left-8 text-sm"
        style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#D9A441" }}
      >
        {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
      </span>

      {/* Flecha izquierda */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Anterior"
        className="absolute left-2 md:left-6 w-12 h-12 flex items-center justify-center transition-opacity hover:opacity-60"
        style={{ color: "#F3EFE7" }}
      >
        <span style={{ fontSize: 32 }}>‹</span>
      </button>

      {/* Contenido */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {current.type === "video" ? (
          <div className="w-[85vw] md:w-[70vw] aspect-video">
            <iframe
              src={current.embedUrl}
              title={current.caption || "video"}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        ) : (
          <img
            src={current.src}
            alt={current.caption || ""}
            className="max-w-[90vw] max-h-[75vh] object-contain"
          />
        )}
        {current.caption && (
          <p
            className="mt-4 text-sm text-center"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#D8D3C7" }}
          >
            {current.caption}
          </p>
        )}
      </div>

      {/* Flecha derecha */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Siguiente"
        className="absolute right-2 md:right-6 w-12 h-12 flex items-center justify-center transition-opacity hover:opacity-60"
        style={{ color: "#F3EFE7" }}
      >
        <span style={{ fontSize: 32 }}>›</span>
      </button>
    </div>
  );
}
