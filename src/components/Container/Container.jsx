import NavBar from "./Navbar/NavBar";
import Inicio from "./Inicio/Inicio";
import Contacto from "./Contacto/Contacto";
import Servicios from "./Servicios/Servicios";
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
            <Contacto/>

            {scrolled && (<a href="https://wa.me/XXXXXXXXXXX" 
                className="whatsapp-float" 
                target="_blank" 
                rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                        alt="WhatsApp" />
                </a>
            )}
            
        </div>
    )
}

export default Container;