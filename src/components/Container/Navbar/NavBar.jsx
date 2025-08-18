import { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar(){

    const [menuOpen, setMenuOpen]=useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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
                <button className="boton-logo-link"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <img className="logo-link" src="/modo_chatbot.png" alt="Logo ModoChatbot" />
                </button>
            </div>

            <ul className="botones-navbar">
                <li>
                    <button 
                        className="link"
                        onClick={() => document.getElementById("servicios").scrollIntoView({ behavior: "smooth" })}                    >
                        Servicios
                    </button>
                </li>
                <li>
                    <button className="link">Nosotros</button>
                </li>
                <li>
                    <button className="link">Contacto</button>
                </li>
            </ul>

            <div className="boton-derecha-navbar">
                <button className="boton-agendar-navbar">Agenda tu diagnóstico</button>
            </div>

            <button className="hamburguer" onClick={()=> setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {menuOpen && (
                <div className="menu-mobile">
                    <ul className="botones-hamburguer">
                            <button
                             onClick={()=>{
                                window.scrollTo({ top: 575, behavior: 'smooth' });
                                setMenuOpen(!menuOpen)
                            }}
                            >
                                Servicios
                            </button>

                            <button
                            onClick={()=>{
                                setMenuOpen(!menuOpen)
                            }}
                            >
                                Nosotros
                            </button>

                            <button
                            onClick={()=>{
                                setMenuOpen(!menuOpen)
                            }}
                            >
                                Contacto
                            </button>

                            <button
                            onClick={()=>{
                                setMenuOpen(!menuOpen)
                            }}
                            >
                                Agenda tu diagnóstico 
                            </button>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default NavBar;