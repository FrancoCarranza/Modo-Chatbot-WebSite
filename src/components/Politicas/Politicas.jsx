import NavBar from "../Navbar/NavBar";
import "./Politicas.css";

function Politicas() {
    return (
        <div className="politicas">
            <NavBar />
            <div className="politicas-container">
                <h2 className="titulo-politicas">Política de Privacidad</h2>
                <p className="fecha-politica"><strong>Última actualización:</strong> 5 de Septiembre de 2025</p>

                <h3>1. Introducción</h3>
                <p>
                    En Modo Chatbot ("nosotros", "nuestro", "nos" o "la Compañía"), valoramos tu privacidad. Esta Política describe cómo recopilamos, utilizamos, compartimos y protegemos tu información personal cuando utilizás nuestro sitio web, panel de control, APIs, integraciones y otros servicios (los "Servicios"). Al usar los Servicios aceptás las prácticas aquí descritas. Los Servicios no están dirigidos a menores.
                </p>

                <h3>2. Información que recopilamos</h3>
                <h4>2.1 Información que vos nos proporcionás</h4>
                <ul>
                    <li>Cuenta y perfil: nombre, correo electrónico y datos de perfil opcionales como nombre completo, alias, imagen y sitio web.</li>
                    <li>Configuración del chatbot: nombre, personalidad, instrucciones, parámetros de funcionamiento, reglas de automatización, números autorizados y límites de respuesta.</li>
                    <li>Documentos e integraciones: textos, archivos, enlaces y otra información que adjuntás para que la IA los utilice.</li>
                    <li>Conexión con mensajería: datos de sesión, códigos QR temporales, estados de conexión y credenciales necesarias para operar la sesión.</li>
                    <li>Comunicaciones: mensajes o consultas que nos enviás por correo u otros canales de soporte.</li>
                </ul>
                <h4>2.2 Información recopilada automáticamente</h4>
                <ul>
                    <li>Uso del servicio: actividad en el dashboard, endpoints llamados, tiempos de respuesta y métricas técnicas.</li>
                    <li>Información del dispositivo: sistema operativo, navegador, IP y configuración regional.</li>
                    <li>Cookies y tecnologías similares: utilizamos cookies esenciales y, cuando corresponda, cookies de preferencia o analíticas para recordar tu sesión y mejorar la experiencia. Podés gestionarlas desde tu navegador.</li>
                </ul>
                <h4>2.3 Información de terceros</h4>
                <ul>
                    <li>Integraciones autorizadas: datos provenientes de plataformas de mensajería y otros servicios que conectás a tu cuenta.</li>
                    <li>Proveedores de IA: contenido enviado a servicios de inteligencia artificial únicamente para generar respuestas conforme a tu configuración.</li>
                </ul>

                <h3>3. Cómo utilizamos tu información</h3>
                <ul>
                    <li>Proveer, operar y mantener los Servicios.</li>
                    <li>Configurar y ejecutar tu asistente de IA conforme a tus instrucciones y documentos aportados.</li>
                    <li>Procesar mensajes de WhatsApp y automatizar respuestas cuando habilitás el chatbot.</li>
                    <li>Enviar comunicaciones operativas, de seguridad y soporte.</li>
                    <li>Mejorar rendimiento, seguridad y usabilidad, y realizar análisis de uso.</li>
                    <li>Detectar, prevenir y abordar fraude, abuso y problemas técnicos.</li>
                    <li>Cumplir obligaciones legales y hacer valer nuestros términos.</li>
                </ul>

                <h3>4. Compartir tu información</h3>
                <p>No vendemos tu información personal. Podemos compartirla con:</p>
                <ul>
                    <li>Proveedores de infraestructura, almacenamiento y bases de datos.</li>
                    <li>Proveedores de servicios de IA para generar respuestas bajo tus instrucciones.</li>
                    <li>Plataformas de mensajería para el envío y recepción de mensajes.</li>
                    <li>Proveedores de hosting, monitoreo y seguridad.</li>
                    <li>Autoridades y terceros, cuando sea necesario para cumplir con la ley o proteger derechos.</li>
                </ul>

                <h3>5. Seguridad de Datos</h3>
                <p>
                    Implementamos medidas técnicas y organizativas razonables para proteger los datos personales. Sin embargo, ningún sistema es totalmente infalible. Te recomendamos usar contraseñas robustas, habilitar medidas de seguridad disponibles y mantener tus dispositivos actualizados.
                </p>

                <h3>6. Retención de Datos</h3>
                <ul>
                    <li>Cuenta y perfil: mientras la cuenta esté activa y por exigencias legales.</li>
                    <li>Chatbot e integraciones: mientras los mantengas activos o hasta su eliminación.</li>
                    <li>Sesiones de mensajería: vinculadas al estado de la sesión; códigos y credenciales caducados se rotan/eliminan.</li>
                    <li>Mensajes y conversaciones: según necesidades operativas y configuraciones; posible anonimización/eliminación.</li>
                    <li>Registros técnicos: por períodos limitados para diagnóstico y cumplimiento.</li>
                </ul>

                <h3>7. Tus Derechos</h3>
                <p>
                    Dependiendo de tu jurisdicción, podés tener derecho a:
                </p>
                <ul>
                    <li>Acceso, rectificación y actualización.</li>
                    <li>Eliminación, restricción u oposición al tratamiento.</li>
                    <li>Portabilidad de datos.</li>
                    <li>Retirar tu consentimiento cuando el tratamiento se base en él.</li>
                </ul>
                <p>
                    Para ejercerlos, contactanos usando los datos de la sección "Contacto". Podemos solicitar verificación de identidad.
                </p>

                <h3>8. Transferencias Internacionales</h3>
                <p>
                    Podemos transferir tu información a países fuera de tu lugar de residencia (por ejemplo, Estados Unidos y países del EEE), donde apliquen leyes de protección de datos diferentes. Utilizamos salvaguardas adecuadas (como cláusulas contractuales tipo) cuando corresponde.
                </p>

                <h3>9. Cambios a esta Política</h3>
                <p>
                    Podemos actualizar esta Política periódicamente. Si realizamos cambios materiales, te notificaremos mediante un aviso destacado en los Servicios o por correo electrónico. El uso continuado tras la entrada en vigor implica la aceptación de la versión revisada.
                </p>
            </div>
        </div>
    );
}

export default Politicas;