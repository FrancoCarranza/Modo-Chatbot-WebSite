import Inicio from "./Inicio/Inicio";
import Contacto from "./Contacto/Contacto";
import "./Container.css";

function Container(){
    return(
        <div className="container">
            <Inicio/>
            <Contacto/>
        </div>
    )
}

export default Container;