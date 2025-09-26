import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./NotFound.css";

function NotFound() {
    return (
        <div className="not-found">
            <NavBar />
            <h2 className="titulo-error">404 - Página No Encontrada</h2>
            <p className="texto-error">La página que buscás no existe o fue movida.</p>
            <NavLink className="boton-error" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>
                Volver al inicio
            </NavLink>
        </div>
    );
}

export default NotFound;