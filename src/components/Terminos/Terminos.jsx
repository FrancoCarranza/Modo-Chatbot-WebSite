import NavBar from "../Navbar/NavBar";
import "./Terminos.css";

function Terminos() {
    return (
        <div className="terminos">
            <NavBar />
            <div className="terminos-container">
                <h2 className="titulo-terminos">Términos y Condiciones</h2>
                <p className="fecha-terminos"><strong>Última actualización:</strong> 5 de Septiembre de 2025</p>

                <h3>1. Introducción</h3>
                <p>
                    Bienvenido a Modo Chatbot ("nosotros", "nuestro", "nos" o "la Compañía"). Estos Términos y Condiciones ("Términos") rigen tu acceso y uso de nuestro sitio web, aplicaciones, API y servicios (colectivamente, los "Servicios").
                </p>
                <p>
                    Al acceder o utilizar nuestros Servicios, aceptás estar legalmente obligado por estos Términos. Si no estás de acuerdo con estos Términos, no debés acceder ni utilizar nuestros Servicios.
                </p>

                <h3>2. Descripción del Servicio</h3>
                <h4>Qué hace Modo Chatbot</h4>
                <ul>
                    <li>Modo Chatbot es un asistente de ventas y atención al cliente impulsado por inteligencia artificial, diseñado para ayudar a empresas a automatizar comunicaciones por WhatsApp, entrenar un agente con documentos propios y mejorar la experiencia del cliente.</li>
                    <li>Nuestros Servicios incluyen, pero no se limitan a:</li>
                    <ul>
                        <li>Respuesta automática a consultas de clientes.</li>
                        <li>Generación de leads y prospección.</li>
                        <li>Integración con plataformas de mensajería como WhatsApp.</li>
                        <li>Análisis de conversaciones y reportes.</li>
                    </ul>
                </ul>

                <h3>3. Cuentas y Registro</h3>
                <h4>Tu responsabilidad</h4>
                <p>
                    Para utilizar ciertos aspectos de nuestros Servicios, debés registrarte para obtener una cuenta. Aceptás proporcionar información precisa, actual y completa durante el proceso de registro y mantener y actualizar dicha información. Sos responsable de mantener la confidencialidad de tu contraseña y de todas las actividades que ocurran bajo tu cuenta. Debés notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta o cualquier otra violación de seguridad.
                </p>

                <h3>4. Planes y Pagos</h3>
                <h4>Suscripciones y cargos</h4>
                <p>
                    Ofrecemos planes de suscripción para nuestros Servicios. Al suscribirte a un plan de pago, aceptás pagar todas las tarifas asociadas con el plan seleccionado. Las tarifas se cobrarán por adelantado y no son reembolsables, excepto según lo exija la ley aplicable o según se indique expresamente en estos Términos. Nos reservamos el derecho de cambiar nuestras tarifas en cualquier momento, con previo aviso de al menos 30 días antes de que dichos cambios entren en vigor.
                </p>

                <h3>5. Propiedad Intelectual</h3>
                <p>
                    Todos los derechos, títulos e intereses sobre los Servicios, incluidos contenidos, características, funcionalidades e interfaces, son y seguirán siendo propiedad exclusiva de la Compañía y sus licenciantes. Nuestros Servicios están protegidos por derechos de autor, marcas comerciales y otras leyes de propiedad intelectual. No podés utilizar nuestro nombre, logotipo o marcas comerciales sin nuestro consentimiento previo por escrito.
                </p>

                <h3>6. Contenido del Usuario</h3>
                <h4>Licencia necesaria para operar el servicio</h4>
                <p>
                    Conservás todos los derechos sobre cualquier contenido que envíes, publiques o muestres en o a través de nuestros Servicios ("Contenido del Usuario"). Al proporcionar Contenido del Usuario, nos otorgás una licencia mundial, no exclusiva, libre de regalías, sublicenciable y transferible para usar, reproducir, modificar, adaptar, publicar, traducir, crear trabajos derivados, distribuir y mostrar dicho Contenido del Usuario en relación con la operación y provisión de nuestros Servicios.
                </p>

                <h3>7. Limitación de Responsabilidad</h3>
                <p>
                    En la medida máxima permitida por la ley aplicable, la Compañía no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, o cualquier pérdida de beneficios o ingresos, ya sea incurrida directa o indirectamente, o cualquier pérdida de datos, uso, buena voluntad u otras pérdidas intangibles. En ningún caso la responsabilidad agregada de la Compañía por todas las reclamaciones relacionadas con los Servicios excederá la cantidad que pagaste a la Compañía por los Servicios durante los últimos tres meses.
                </p>

                <h3>8. Modificaciones</h3>
                <p>
                    Nos reservamos el derecho de modificar estos Términos en cualquier momento. Si realizamos cambios materiales, te notificaremos mediante un aviso prominente en nuestros Servicios o enviándote un correo electrónico. Tu uso continuado de los Servicios después de que dichos cambios entren en vigor constituye tu aceptación de los Términos revisados.
                </p>

                <h3>9. Ley Aplicable</h3>
                <p>
                    Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de la República Argentina, y cualquier disputa será resuelta exclusivamente en los tribunales de Córdoba, Argentina.
                </p>
            </div>
        </div>
    );
}

export default Terminos;