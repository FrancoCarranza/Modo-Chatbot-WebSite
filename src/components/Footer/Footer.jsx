import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

function Footer(){
    return(
        <div className='footer'>
            <div className="arriba">
                <div className="logo-footer">
                    <button className="logo-footer"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        if (menuOpen) setMenuOpen(false);
                    }}
                >
                    <img className="logo-link" src="/modo_chatbot.png" alt="Logo ModoChatbot" />
                </button>
                </div>
                <div className="navegacion-footer">
                    <h3 className="titulos-footer">Navegación</h3>
                    <ul>
                        <li><a className="links-navegacion" href="#nosotros">Servicios</a></li>
                        <li><a className="links-navegacion" href="#casos">Nosotros</a></li>
                        <li><a className="links-navegacion" href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className="contactos-footer">
                    <h3 className="titulos-footer">Contactos</h3>
                    <a href="#whatsapp" className='numero'>
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
                        <li><a href="https://www.linkedin.com/in/pablo-hernandez-123456789/" className='red-footer'>
                            <FontAwesomeIcon icon={faLinkedin} size='lg' />
                            {' Pablo Hernandez'}
                        </a></li>
                        <li><a href="https://www.youtube.com/channel/UC123456789" className='red-footer'>
                            <FontAwesomeIcon icon={faYoutube} size='lg' />
                            {' ModoChatbot'}
                        </a></li>
                    </ul>
                </div>
            </div>
            <div className="abajo">
                <p className="texto-footer">Copyright © 2025 Modochatbot</p>
                <p className="texto-footer"> - Todos los derechos reservados - </p>
            </div>
        </div>
    )
}

export default Footer;