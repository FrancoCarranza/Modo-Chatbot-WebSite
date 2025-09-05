import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar(){

    const [menuOpen, setMenuOpen]=useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className={`navBar ${scrolled ? "scroll-navBar" : ""}`}>
            <div className="logo">
                <NavLink className="boton-logo-link" to="/"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        if (menuOpen) setMenuOpen(false);
                    }}
                >
                    <img className="logo-link" src="/modo_chatbot.png" alt="Logo ModoChatbot" />
                </NavLink>
            </div>

            <ul className="botones-navbar">
                <li>
                    <NavLink 
                        className="link"
                        to="/#servicios"
                    >
                        Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="link"
                        to="/#nosotros"
                    >
                        Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="link"
                        to="/#contacto"
                    >
                        Contacto
                    </NavLink>
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
                            <NavLink to={"/#servicios"}
                            className={"links-hamburguer"}
                             onClick={() => {
                                    document.getElementById("servicios").scrollIntoView({ behavior: "smooth" })
                                    setMenuOpen(!menuOpen)
                                    }
                                }
                            >
                                Servicios
                            </NavLink>

                            <NavLink to={"/#nosotros"}
                            className={"links-hamburguer"}
                            onClick={()=>{
                                document.getElementById("nosotros").scrollIntoView({ behavior: "smooth" })
                                setMenuOpen(!menuOpen)
                            }}
                            >
                                Nosotros
                            </NavLink>

                            <NavLink to={"/#contacto"}
                            className={"links-hamburguer"}
                            onClick={() => {
                                    document.getElementById("contacto").scrollIntoView({ behavior: "smooth" })
                                    setMenuOpen(!menuOpen)
                                    }
                                }
                            >
                                Contacto
                            </NavLink>

                            <button
                            className="links-hamburguer"
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