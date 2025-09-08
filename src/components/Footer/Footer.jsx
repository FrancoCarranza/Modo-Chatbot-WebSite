import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

function Footer(){
    return(
        <div className='footer'>
            <div className="arriba">
                <div className="logo-footer">
                <NavLink className="logo-footer" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>
                    <img className="logo-link" src="/modo_chatbot.png" alt="Logo ModoChatbot" />
                </NavLink>
                </div>
                <div className="navegacion-footer">
                    <h3 className="titulos-footer">Navegación</h3>
                    <ul>
                        <li><Link className="links-navegacion" to="/#servicios">Servicios</Link></li>
                        <li><Link className="links-navegacion" to="/#nosotros">Nosotros</Link></li>
                        <li><Link className="links-navegacion" to="/#contacto">Contacto</Link></li>
                    </ul>
                </div>
                <div className="contactos-footer">
                    <h3 className="titulos-footer">Contactos</h3>
                    <a href="" className='numero'>
                        <FontAwesomeIcon icon={faWhatsapp} size='lg' />
                        {' +54 9 351 516-0101'}
                    </a>
                </div>
                <div className="redes-footer">
                    <ul>
                        <h3 className="titulos-footer">Seguinos</h3>
                        <li><a href="https://www.instagram.com/modochatbot/" className='red-footer'>
                            <FontAwesomeIcon icon={faInstagram} size='lg' />
                            {' modochatbot'}
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/pablo-hernandez-modochatbot" className='red-footer'>
                            <FontAwesomeIcon icon={faLinkedin} size='lg' />
                            {' Pablo Hernandez'}
                        </a></li>
                        <li><a href="https://www.youtube.com/channel/UC8pv8tnSQTzsbZWaAjmK5oA" className='red-footer'>
                            <FontAwesomeIcon icon={faYoutube} size='lg' />
                            {' ModoChatbot'}
                        </a></li>
                    </ul>
                </div>
            </div>
            <div className="abajo">
                <p className="texto-footer">© 2025 Modo ChatBot.</p>
                <p className="texto-footer"> Todos los derechos reservados.</p>
                <NavLink 
                    className="texto-footer nav" 
                    to="/privacy-policy"
                    onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                >
                    Política de privacidad
                </NavLink>
                <NavLink className="texto-footer nav" 
                    to="/terms-and-conditions"
                    onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                >
                    Términos y Condiciones
                </NavLink>
            </div>
        </div>
    )
}

export default Footer;