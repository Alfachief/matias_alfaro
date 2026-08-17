"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import fotosData from "../data/fotos-data";

export default function PhotoGallery() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-6 md:px-16 py-20 max-w-6xl mx-auto">
      <p
        className="text-xs tracking-[0.35em] uppercase mb-4"
        style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#D9A441" }}
      >
        Microgalería — Fotografía
      </p>
      <h2
        className="mb-10"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 500,
          fontSize: "clamp(2rem, 4.5vw, 3rem)",
          color: "#F3EFE7",
        }}
      >
        Fotos
        
      </h2>
 <a
          href="/"
          className="group inline-flex items-center gap-3 px-6 py-3 border transition-colors duration-300"
          style={{ borderColor: "#D9A441", color: "#D9A441" }}
        >
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem" }}>
            Volver al Inicio
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">←</span>
        </a>


      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
        {fotosData.map((foto, i) => (
          <button
            key={foto.id}
            onClick={() => setOpenIndex(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden text-left"
          >
            <img
              src={foto.src}
              alt={foto.caption || ""}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span
              className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,9,8,0.85) 0%, rgba(10,9,8,0) 55%)",
              }}
            >
              <span
                className="text-sm"
                style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#F3EFE7" }}
              >
                {foto.caption}
              </span>
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          items={fotosData}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
