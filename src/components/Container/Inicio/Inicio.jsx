import "./Inicio.css";

function Inicio(){
    console.log('aaa', document.documentElement.clientWidth);
    return(
        <div className="inicio" id="inicio">
            <h1 className="h1-inicio">MODO CHATBOT</h1>
            <h2 className="h2-inicio">Marketing <strong>Automatizado</strong></h2>
            <section className="textos-inicio">
                <p className="p-inicio">Aumentá tus ventas y atendé a tus clientes 24/7 con nuestro sistema de chatbots.</p>
                <p className="p-inicio">Para solicitar un presupuesto o comunicarte dale clic al botón debajo.</p>
            </section>
            <button className="boton-inicio">Hablar por WhatsApp</button>    
        </div>
    )
}

export default Inicio;