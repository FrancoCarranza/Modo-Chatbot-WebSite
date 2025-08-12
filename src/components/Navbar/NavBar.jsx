import "./NavBar.css";

function NavBar(){
    return(
        <div className="navBar">
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
    )
}

export default NavBar