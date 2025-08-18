import "./Servicios.css";

function Servicios(){
    return(
        <div className="servicios" id="servicios">
            <h2 className="titulo-servicios">Potencia tus ventas <strong>24/7</strong></h2>

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
                        <img src="/chatbot.png" alt="" />
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
                        <img src="/artificial-intelligence.png" alt="" />
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default Servicios;