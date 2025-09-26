import { useEffect, useRef, useState } from "react";
import "./Servicios.css";

function Servicios() {

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
        <div className="servicios" id="servicios">
            <h2
                className={`titulo-servicios${visible ? " animar" : ""}`}
                ref={tituloRef}
            >
                Potencia tus ventas <strong>24/7</strong>
            </h2>

            <div className="servicios-container">
                <div className="container-servicio">
                    <div className="textos-servicios primero">
                        <h3>Embudo de ventas Automatizado</h3>
                        <p>Diseñamos embudos estratégicos que guían a tus clientes desde el primer contacto hasta la compra, maximizando cada oportunidad.</p>
                    </div>
                    <div className="imagen-servicios">
                        <img src="/funnel.png" alt="funnel" />
                    </div>
                </div>

                <div className="container-servicio">
                    <div className="imagen-servicios">
                        <img src="/chatbot.png" alt="funnel" />
                    </div>
                    <div className="textos-servicios segundo">
                        <h3>Chatbots Inteligentes</h3>
                        <p>Creamos asistentes virtuales que responden, califican y convierten clientes automáticamente en tus canales de comunicación.</p>
                    </div>
                </div>

                <div className="container-servicio">
                    <div className="textos-servicios primero">
                        <h3>Integraciones y Seguimiento</h3>
                        <p>Conectamos tus herramientas y plataformas para que trabajen en conjunto y puedas medir resultados en tiempo real.</p>
                    </div>
                    <div className="imagen-servicios">
                        <img src="/artificial-intelligence.png" alt="funnel" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicios;