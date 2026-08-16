"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import produccionesData from "../data/producciones-data";

export default function ProductionsGallery() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-6 md:px-16 py-20 max-w-6xl mx-auto">
      <p
        className="text-xs tracking-[0.35em] uppercase mb-4"
        style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#D9A441" }}
      >
        Microgalería — Producciones
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
        Producciones
      </h2>

      <a
  href="/"
  className="group inline-flex items-center gap-3 px-6 py-3 border transition-colors duration-300"
  style={{ borderColor: "#D9A441", color: "#D9A441" }}
>
  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem" }}>
    Volver al inicio
  </span>
  <span className="transition-transform duration-300 group-hover:translate-x-1">←</span>
</a>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
        {produccionesData.map((prod, i) => (
          <button
            key={prod.id}
            onClick={() => setOpenIndex(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden text-left"
          >
            <img
              src={prod.thumbnail}
              alt={prod.caption || ""}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.04]"
            />
            {/* Ícono de play */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(20,18,16,0.55)", border: "1.5px solid rgba(243,239,231,0.8)" }}
              >
                <span
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "13px solid #F3EFE7",
                    marginLeft: 3,
                  }}
                />
              </span>
            </span>
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
                {prod.caption}
              </span>
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          items={produccionesData}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
