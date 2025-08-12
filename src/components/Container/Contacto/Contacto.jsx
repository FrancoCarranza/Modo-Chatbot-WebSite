import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./Contacto.css";

function Contacto(){
 return(
    <div className="contacto">
        <h2 className='titulo-contacto'>Contactanos</h2>

        <form className="form-contacto">
            <div className="arriba-contacto">
                <label className="campo" htmlFor='nombre'>
                    <input className="input-campo"
                    type="text"
                    id='nombre'
                    placeholder="Nombre"
                    required
                    />
                </label>
                <label className="campo" htmlFor='email'>
                    <input className="input-campo"
                    type="email"
                    id='email'
                    placeholder="Email"
                    required
                    />
                </label>
            </div>
            
            <label className="campo" htmlFor='mensaje'>
                <textarea className='textArea'
                name="mensaje"
                id='mensaje'
                placeholder="Mensaje" 
                rows="5"
                required>
                </textarea>
            </label>
            <button className='boton-contacto'>Enviar</button>
        </form>

        <ul className='links-contactos'>
            <li className='li-contactos'>
                <FontAwesomeIcon icon={faEnvelope} />
                <strong>Email:</strong> hola@modochatbot.com
            </li>
            <li className='li-contactos'>
                <FontAwesomeIcon icon={faPhone} />
                <strong>Teléfono:</strong><a className='tel' href="tel:+5491124961805"> +54 9 11 2496 1805</a>
            </li>
            <li className='li-contactos'>
                <FontAwesomeIcon icon={faLocationDot} />
                <strong>Direccion:</strong> Jose Ignacio Rucci 1945, San Fernando CP 1646, Buenos Aires
            </li>
        </ul>

        <div className='redes-contactos'>
            <h3 className='h3-contactos'>Conectá con nosotros</h3>
            <div className='redes'>
                <a href="#">
                    <FontAwesomeIcon className='red-contactos-1' icon={faSquareFacebook} size='3x' />
                </a>
                <a href="#">
                    <FontAwesomeIcon className='red-contactos-2' icon={faInstagram} size='3x' />
                </a>
                <a href="#">
                    <FontAwesomeIcon className='red-contactos-3' icon={faLinkedin} size='3x' />
                </a>
                <a href="#">
                    <FontAwesomeIcon className='red-contactos-4' icon={faYoutube} size='3x' />
                </a>
            </div>
        </div>
    </div>
 )
}

export default Contacto;