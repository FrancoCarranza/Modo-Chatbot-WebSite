import { useState, useEffect, useRef } from "react";
import "./Casos.css";

function VideoCaso({ videoId, titulo, descripcion }) {

  const [play, setPlay] = useState(false);

  return (
    <div className="container-video">
      <div className="video-casos">
        {play ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="miniatura-video"
          />
        ) : (
          <div className="miniatura-wrapper">
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={titulo}
              className="miniatura-video"
              onClick={() => setPlay(true)}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
      </div>
      <h3 className="titulo-video">{titulo}</h3>
      <p className="descripcion-video">{descripcion}</p>
    </div>
  );
}

function Casos() {

  const tituloRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (tituloRef.current) observer.observe(tituloRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="casos">
      <h2
        ref={tituloRef}
        className={`titulo-casos${visible ? " animar" : ""}`}
      >
        Casos de Éxito
      </h2>
      <div className="container-casos">
        <VideoCaso
          videoId="4dZlyMF6nzc"
          titulo="Automatización de ventas con WhatsApp"
          descripcion="Cómo un chatbot ayudó a aumentar conversiones y ahorrar tiempo en atención al cliente."
        />
        <VideoCaso
          videoId="Lkg1SGDQJCk"
          titulo="Chatbot para consultas automáticas"
          descripcion="Un ejemplo de cómo automatizar respuestas frecuentes y mejorar la experiencia del cliente."
        />
        <VideoCaso
          videoId="w3UHtfhsVdg"
          titulo="Embudo digital para captar clientes"
          descripcion="Cómo automatizamos el proceso de captación y mejoramos la conversión de prospectos."
        />
      </div>
      <div className="canal-youtube">
        <a
          href="https://www.youtube.com/@modochatbot" // Usá el link real del canal
          target="_blank"
          rel="noopener noreferrer"
          className="boton-youtube"
        >
          Ver más casos en nuestro canal de YouTube
        </a>
      </div>
    </div>
  );
}

export default Casos;