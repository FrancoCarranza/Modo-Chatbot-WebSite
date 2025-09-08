import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./Contacto.css";

function Contacto(){

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

    return(
        <div className="contacto" id="contacto">

            <div className='redes-contactos'>
                <div className="telefono-contactos">
                    <h3
                        className={`titulo-contactos${visible ? " animar" : ""}`}
                        ref={tituloRef}
                    >
                        Contactanos
                    </h3>
                    <a href="" className='numero'>
                        <FontAwesomeIcon icon={faWhatsapp} size='lg' />
                        {' +54 9 351 516-0101'}
                    </a>
                </div>
                <div className="redes-container">
                    {/* <h3 className='h3-contactos'>Seguinos</h3> */}
                    <div className='redes'>
                        <a href="https://www.instagram.com/modochatbot/">
                            <FontAwesomeIcon className='red-contactos-2' icon={faInstagram} size='3x' />
                        </a>
                        <a href="https://www.linkedin.com/in/pablo-hernandez-modochatbot">
                            <FontAwesomeIcon className='red-contactos-3' icon={faLinkedin} size='3x' />
                        </a>
                        <a href="https://www.youtube.com/channel/UC8pv8tnSQTzsbZWaAjmK5oA">
                            <FontAwesomeIcon className='red-contactos-4' icon={faYoutube} size='3x' />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contacto;