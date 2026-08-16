/**
 * DATOS DE LA GALERÍA DE PRODUCCIONES (VIDEO)
 * ---------------------------------------------
 * Editá este archivo para agregar, quitar o cambiar tus producciones.
 *
 * Cómo conseguir los datos de un video de YouTube:
 * 1. Subilo a YouTube como "No listado" (no aparece en búsquedas, pero es
 *    accesible por el link — ideal para un portafolio).
 * 2. De la URL del video (ej. https://www.youtube.com/watch?v=ABC123XYZ)
 *    tomá el ID: ABC123XYZ
 * 3. embedUrl siempre tiene esta forma: "https://www.youtube.com/embed/ABC123XYZ"
 * 4. thumbnail (la miniatura) siempre tiene esta forma:
 *    "https://img.youtube.com/vi/ABC123XYZ/hqdefault.jpg"
 *    (se genera sola, no hace falta subir ninguna imagen)
 *
 * Si preferís Vimeo: embedUrl es "https://player.vimeo.com/video/ID_DEL_VIDEO"
 * y la miniatura hay que descargarla manualmente y ponerla en /public/producciones/
 */

const produccionesData = [
  {
    id: "produccion-01",
    type: "video",
    thumbnail: "https://img.youtube.com/vi/ID_DEL_VIDEO_1/hqdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/ID_DEL_VIDEO_1",
    caption: "Nombre del proyecto 1 — rol: montaje y color",
  },
  {
    id: "produccion-02",
    type: "video",
    thumbnail: "https://img.youtube.com/vi/ID_DEL_VIDEO_2/hqdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/ID_DEL_VIDEO_2",
    caption: "Nombre del proyecto 2 — rol: postproducción",
  },
  // Agregá más producciones copiando el bloque de arriba
];

export default produccionesData;
