import { useState } from "react";
import "./Preguntas.css";

function Preguntas(){

    const [abierto1, setAbierto1]=useState(false)
    const [abierto2, setAbierto2]=useState(false)
    const [abierto3, setAbierto3]=useState(false)
    const [abierto4, setAbierto4]=useState(false)
    const [abierto5, setAbierto5]=useState(false)
    const [abierto6, setAbierto6]=useState(false)
    const [abierto7, setAbierto7]=useState(false)
    const [abierto8, setAbierto8]=useState(false)

    return(
        <div className="preguntas">
            <h2 className="titulo-preguntas">Preguntas frecuentes</h2>

            <div className="preguntas-container">
                <div className="izquierda-preguntas">
                    <button
                        className={`container-pregunta ${abierto1 ? "abierto" : ""}`}
                        onClick={()=>setAbierto1(!abierto1)}
                    >
                        <div className="pregunta-container">
                            <h3 className="pregunta">¿Que es Modo ChatBot?</h3>
                            <p>{abierto1 ? "-" : "+"}</p>
                        </div>
                        {abierto1 && (
                            <p className="respuesta">Es una herramienta que automatiza la atención y las ventas de tu negocio, respondiendo consultas y guiando a tus clientes de manera rápida y eficiente.</p>
                        )}
                    </button>

                    <button
                        className={`container-pregunta ${abierto2 ? "abierto" : ""}`}
                        onClick={() => setAbierto2(!abierto2)}
                    >
                        <div className="pregunta-container">
                            <h3 className="pregunta">¿Necesito saber de código para usar el bot?</h3>
                            <p>{abierto2 ? "-" : "+"}</p>
                        </div>
                        {abierto2 && (
                            <p className="respuesta">
                            No. Todo se configura de forma visual y sencilla, para que puedas gestionarlo sin conocimientos técnicos.
                            </p>
                        )}
                    </button>

                    <button
                        className={`container-pregunta ${abierto3 ? "abierto" : ""}`}
                        onClick={() => setAbierto3(!abierto3)}
                    >
                    <div className="pregunta-container">
                        <h3 className="pregunta">¿Qué canales soporta?</h3>
                        <p>{abierto3 ? "-" : "+"}</p>
                    </div>
                    {abierto3 && (
                        <p className="respuesta">
                        Podés usarlo en WhatsApp, Instagram, Facebook Messenger y también integrarlo en tu sitio web.
                        </p>
                    )}
                    </button>

                    <button
                        className={`container-pregunta ${abierto4 ? "abierto" : ""}`}
                        onClick={() => setAbierto4(!abierto4)}
                    >
                    <div className="pregunta-container">
                        <h3 className="pregunta">¿Se integra con mi CRM u otras herramientas?</h3>
                        <p>{abierto4 ? "-" : "+"}</p>
                    </div>
                    {abierto4 && (
                        <p className="respuesta">
                        Sí. Conectamos el chatbot con CRMs, Ads, pasarelas de pago y otras herramientas para que todo trabaje en conjunto.
                        </p>
                    )}
                    </button>
                </div>

                <div className="derecha-preguntas">
                    <button
                        className={`container-pregunta ${abierto5 ? "abierto" : ""}`}
                        onClick={() => setAbierto5(!abierto5)}
                    >
                    <div className="pregunta-container">
                        <h3 className="pregunta">¿Cómo se personaliza la conversación?</h3>
                        <p>{abierto5 ? "-" : "+"}</p>
                    </div>
                    {abierto5 && (
                        <p className="respuesta">
                        Creamos flujos a medida de tu negocio, con respuestas personalizadas y adaptadas a tu marca.
                        </p>
                    )}
                    </button>

                    <button
                        className={`container-pregunta ${abierto6 ? "abierto" : ""}`}
                        onClick={() => setAbierto6(!abierto6)}
                    >
                    <div className="pregunta-container">
                        <h3 className="pregunta">¿Cuánto demora implementarlo?</h3>
                        <p>{abierto6 ? "-" : "+"}</p>
                    </div>
                    {abierto6 && (
                        <p className="respuesta">
                        En general, entre 3 y 7 días según la complejidad del proyecto y las integraciones que necesites.
                        </p>
                    )}
                    </button>

                    <button
                        className={`container-pregunta ${abierto7 ? "abierto" : ""}`}
                        onClick={() => setAbierto7(!abierto7)}
                    >
                    <div className="pregunta-container">
                        <h3 className="pregunta">¿Es seguro y protege los datos de mis clientes?</h3>
                        <p>{abierto7 ? "-" : "+"}</p>
                    </div>
                    {abierto7 && (
                        <p className="respuesta">
                        Sí. Trabajamos con herramientas oficiales y protocolos de seguridad para resguardar la información de tus clientes.
                        </p>
                    )}
                    </button>

                    <button
                        className={`container-pregunta ${abierto8 ? "abierto" : ""}`}
                        onClick={() => setAbierto8(!abierto8)}
                    >
                    <div className="pregunta-container">
                        <h3 className="pregunta">¿Hay soporte o tutoriales?</h3>
                        <p>{abierto8 ? "-" : "+"}</p>
                    </div>
                    {abierto8 && (
                        <p className="respuesta">
                        Claro. Te acompañamos en todo el proceso y además te damos guías prácticas para que gestiones el bot sin complicaciones.
                        </p>
                    )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Preguntas;