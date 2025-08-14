import NavBar from "./Navbar/NavBar";
import Inicio from "./Inicio/Inicio";
import Contacto from "./Contacto/Contacto";
import "./Container.css";
import { useEffect, useState } from "react";

function Container(){

    const [scrolled, setScrolled] = useState(false)
    
        useEffect(() => {
            const handleScroll = () => {
                console.log(window.scrollY);
                setScrolled(window.scrollY > 100);
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