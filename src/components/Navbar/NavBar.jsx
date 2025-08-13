import { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar(){

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
        <div className={`navBar ${scrolled ? "scroll-navBar" : ""}`}>
            <div className="logo">
                <img className="logo-link" src="/modo_chatbot.png" alt="Logo ModoChatbot" />
            </div>

            <ul className="botones-navbar">
                <li>
                    <button className="link">Servicios</button>
                </li>
                <li>
                    <button className="link">Nosotros</button>
                </li>
                <li>
                    <button className="link">Contacto</button>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;