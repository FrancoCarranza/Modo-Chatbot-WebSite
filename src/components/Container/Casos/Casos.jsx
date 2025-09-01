import "./Casos.css";

function Casos() {
  return (
    <div className="casos">
        <h2 className="titulo-casos">Casos de Éxito</h2>
        <div className="container-casos">
            <div className="container-video">
                <h3 className="titulo-video">Automatización de ventas con WhatsApp</h3>
                <div className="video-casos">
                    <iframe width="400" src="https://www.youtube.com/embed/4dZlyMF6nzc?si=4RQkUCELqfOhdCDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className="descripcion-video">Cómo un chatbot ayudó a aumentar conversiones y ahorrar tiempo en atención al cliente.</p>
            </div>

            <div className="container-video">
                <h3 className="titulo-video">Chatbot para consultas automáticas</h3>
                <div className="video-casos">
                    <iframe width="400" src="https://www.youtube.com/embed/Lkg1SGDQJCk?si=UI9cT9yU3m0avMTT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className="descripcion-video">Un ejemplo de cómo automatizar respuestas frecuentes y mejorar la experiencia del cliente.</p>
            </div>

            <div className="container-video">
                <h3 className="titulo-video">Embudo digital para captar clientes</h3>
                <div className="video-casos">
                    <iframe width="400" src="https://www.youtube.com/embed/w3UHtfhsVdg?si=vVY5F_etjQ9y6Q-v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className="descripcion-video">Cómo automatizamos el proceso de captación y mejoramos la conversión de prospectos.</p>
            </div>
        </div>
    </div>
  );
}

export default Casos;