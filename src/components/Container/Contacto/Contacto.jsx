import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./Contacto.css";

function Contacto(){
 return(
    <div className="contacto">

        <div className='redes-contactos'>
            <h3 className='h3-contactos'>Conectá con nosotros</h3>
            <div className='redes'>
                <a href="#">
                    <FontAwesomeIcon className='red-contactos-1' icon={faSquareFacebook} size='3x' />
                </a>
                <a href="https://www.instagram.com/modochatbot/">
                    <FontAwesomeIcon className='red-contactos-2' icon={faInstagram} size='3x' />
                </a>
                <a href="#">
                    <FontAwesomeIcon className='red-contactos-3' icon={faLinkedin} size='3x' />
                </a>
                <a href="https://www.youtube.com/channel/UC8pv8tnSQTzsbZWaAjmK5oA">
                    <FontAwesomeIcon className='red-contactos-4' icon={faYoutube} size='3x' />
                </a>
            </div>
        </div>

    </div>
 )
}

export default Contacto;