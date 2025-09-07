import NavBar from "../NavBar/NavBar"
import Inicio from "./Inicio/Inicio";
import Servicios from "./Servicios/Servicios";
import Nosotros from "./Nosotros/Nosotros";
import Casos from "./Casos/Casos";
import Reseñas from "./Reseñas/Reseñas";
import Preguntas from "./Preguntas/Preguntas";
import Contacto from "./Contacto/Contacto";
import { useEffect, useState } from "react";
import "./Container.css";


function Container(){

    const [scrolled, setScrolled] = useState(false)
    
        useEffect(() => {
            const handleScroll = () => {
                console.log(window.scrollY);
                setScrolled(window.scrollY > 434);
            };
    
            window.addEventListener("scroll", handleScroll);
    
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

    return(
        <div className="container">
            <NavBar/>
            <Inicio/>
            <Servicios/>
            <Nosotros/>
            <Casos/>
            <Reseñas/>
            <Preguntas/>
            <Contacto/>

            {scrolled && (<a href="https://wa.me/XXXXXXXXXXX" 
                className="whatsapp-float" 
                target="_blank" 
                rel="noopener noreferrer">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                        alt="WhatsApp" 
                    />
                </a>
            )}
            
        </div>
    )
}

export default Container;