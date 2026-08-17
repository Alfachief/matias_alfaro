import React from "react";



const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');`;

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.014 2C6.478 2 2 6.478 2 12.014c0 1.834.487 3.628 1.412 5.201L2.06 22l4.907-1.318a9.94 9.94 0 0 0 5.047 1.365h.004c5.536 0 10.014-4.478 10.014-10.014 0-2.674-1.041-5.19-2.933-7.081A9.95 9.95 0 0 0 12.014 2zm5.868 15.862c-.248.694-1.436 1.363-1.973 1.442-.505.075-1.14.107-1.836-.116-.423-.135-.966-.314-1.663-.615-2.928-1.264-4.84-4.209-4.986-4.406-.148-.198-1.199-1.596-1.199-3.046 0-1.45.759-2.163 1.028-2.46.272-.297.595-.372.792-.372.198 0 .397.002.57.01.183.009.428-.07.669.51.248.595.842 2.058.917 2.207.075.149.124.322.025.52-.1.199-.149.323-.298.497-.148.173-.312.387-.446.52-.148.148-.303.309-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.012 2.093 1.325 2.39 1.475.297.148.471.124.644-.075.173-.198.743-.867.94-1.164.199-.298.397-.249.67-.15.272.1 1.733.818 2.03.967.297.149.495.223.57.347.075.124.075.719-.173 1.413z" />
    </svg>
  );
}

export default function PortfolioSections() {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: "#141210",
        color: "#F3EFE7",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{FONT_IMPORT}</style>

      {/* ---------- QUIÉN SOY ---------- */}
      <section id="quien-soy" className="relative px-6 md:px-16 pt-24 pb-20 max-w-5xl mx-auto">
        <p
          className="text-xs tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#D9A441" }}
        >
          Rollo 01 — Presentación
        </p>

        <div className="grid md:grid-cols-[minmax(0,280px)_1fr] gap-10 md:gap-14 items-start">
          {/* Foto de perfil, estilo cuadro de negativo */}
          <div className="relative w-full max-w-[280px]">
            <div
              className="relative overflow-hidden"
              style={{ border: "1px solid rgba(217,164,65,0.5)", padding: 8 }}
            >
              <img
                src="/perfil.jpg"
                alt="Matías Alfaro"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <span
              className="absolute -bottom-3 left-2 px-2"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.65rem",
                color: "#D9A441",
                background: "#141210",
              }}
            >
              FRAME 00
            </span>
          </div>

          {/* Texto */}
          <div>
            <h2
              className="leading-[0.95] mb-8"
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              }}
            >
              ¿Quién soy?
            </h2>
            <p className="max-w-2xl text-lg md:text-xl leading-relaxed mb-10" style={{ color: "#D8D3C7" }}>
              Me presento, soy{" "}
              <span style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", color: "#F3EFE7" }}>
                Matías Alfaro
              </span>
              , tengo 24 años y trabajo detrás y delante de cámara en cada etapa de una producción visual.
            </p>

            {/* Tira de roles estilo "hoja de contactos" */}
            <div
              className="flex flex-wrap gap-0 border-t border-b"
              style={{ borderColor: "rgba(217,164,65,0.35)" }}
            >
              {["Diseñador", "Fotógrafo", "Camarógrafo", "Montajista", "Postproductor", "Fiel"].map(
                (rol, i) => (
                  <div
                    key={rol}
                    className="flex items-center gap-3 py-4 pr-8 border-r last:border-r-0"
                    style={{ borderColor: "rgba(217,164,65,0.2)" }}
                  >
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.7rem",
                        color: "#D9A441",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm md:text-base">{rol}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactSheetDivider frame="02" />

      {/* ---------- GALERÍA DE FOTOS ---------- */}
      <section id="galeria-fotos" className="px-6 md:px-16 py-20 max-w-5xl mx-auto">
        <p
          className="text-xs tracking-[0.35em] uppercase mb-4"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#D9A441" }}
        >
          Rollo 02 — Fotografía
        </p>
        <h3
          className="mb-4"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
        >
          Galería de fotos
        </h3>
        <p className="max-w-xl text-base md:text-lg mb-8" style={{ color: "#D8D3C7" }}>
          Mi rol como fotógrafo: capturar el momento exacto, componer la escena y dar dirección
          visual a cada sesión.
        </p>
        <a
          href="/galeria/fotos"
          className="group inline-flex items-center gap-3 px-6 py-3 border transition-colors duration-300"
          style={{ borderColor: "#D9A441", color: "#D9A441" }}
        >
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem" }}>
            Ver microgalería
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </section>

      <ContactSheetDivider frame="03" />

      {/* ---------- GALERÍA DE PRODUCCIONES ---------- */}
      <section id="galeria-producciones" className="px-6 md:px-16 py-20 max-w-5xl mx-auto">
        <p
          className="text-xs tracking-[0.35em] uppercase mb-4"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#D9A441" }}
        >
          Rollo 03 — Video
        </p>
        <h3
          className="mb-4"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
        >
          Galería de producciones
        </h3>
        <p className="max-w-xl text-base md:text-lg mb-8" style={{ color: "#D8D3C7" }}>
          Mi rol como montajista y postproductor: darle ritmo, color y forma final a cada
          producción, del material crudo a la pieza terminada.
        </p>
        <a
          href="/galeria/producciones"
          className="group inline-flex items-center gap-3 px-6 py-3 border transition-colors duration-300"
          style={{ borderColor: "#D9A441", color: "#D9A441" }}
        >
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem" }}>
            Ver microgalería
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </section>

      <ContactSheetDivider frame="04" />

      
      <section className="px-6 md:px-16 py-24 max-w-3xl mx-auto text-center">
        <p
          className="text-xs tracking-[0.35em] uppercase mb-8"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#D9A441" }}
        >
          Rollo 04 — Fundamento
        </p>
        <blockquote
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.4rem, 3.2vw, 2rem)",
            lineHeight: 1.5,
            color: "#F3EFE7",
          }}
        >
          "Todo lo puedo en Cristo que me fortalece."
        </blockquote>
        <p className="mt-6 text-sm" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#D9A441" }}>
          Filipenses 4:13
        </p>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer
        className="px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t"
        style={{ borderColor: "rgba(217,164,65,0.25)" }}
      >
        <p
          className="text-xs"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#8A8478" }}
        >
          © {new Date().getFullYear()} Matías Alfaro
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-opacity hover:opacity-70"
            style={{ color: "#F3EFE7" }}
          >
            <InstagramIcon width={22} height={22} />
          </a>
          <a
            href="https://wa.me/TU_NUMERO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-opacity hover:opacity-70"
            style={{ color: "#F3EFE7" }}
          >
            <WhatsAppIcon width={20} height={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}

/* Divisor firma: tira de "hoja de contactos" con agujeros de sprocket */
function ContactSheetDivider({ frame }) {
  const holes = new Array(24).fill(0);
  return (
    <div
      className="relative py-3 flex items-center"
      style={{ background: "#0D0C0B", borderTop: "1px solid rgba(217,164,65,0.15)", borderBottom: "1px solid rgba(217,164,65,0.15)" }}
    >
      <div className="flex justify-between w-full px-6 md:px-16">
        {holes.map((_, i) => (
          <span
            key={i}
            className="rounded-[2px]"
            style={{ width: 6, height: 9, background: "rgba(217,164,65,0.35)" }}
          />
        ))}
      </div>
      <span
        className="absolute left-1/2 -translate-x-1/2 px-3"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.65rem",
          color: "#D9A441",
          background: "#0D0C0B",
        }}
      >
        FRAME {frame}
      </span>
    </div>
  );
}
