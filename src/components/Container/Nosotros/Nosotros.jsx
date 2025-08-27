import { FlipWords } from "./FlipWords";
import "./Nosotros.css";

function Nosotros(){

    const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
    ];

    return(
        <div className="nosotros" id="nosotros">
            <h2 className="titulo-nosotros">
                Modo ChatBot: {" "}
                <FlipWords
                    className="flip-words"
                    words={[" simple", " rápido", " efectivo"]}
                />
            </h2>
            <p className="subtitulo-nosotros">
                Ayudamos a empresas y emprendedores a escalar sus ventas con chatbots y automatizaciones. <br />
            Nuestro enfoque es práctico y orientado a resultados.</p>
            <section className="quienes-somos">
                <div className="textos-quienes-somos">
                    <h3 className="titulo-quienes-somos">¿Quiénes somos?</h3>
                    <p className="texto-quienes-somos">En ModoChatBot somos un equipo especializado en automatización de atención al cliente y ventas digitales. Nuestra misión es ayudar a negocios de todos los tamaños a optimizar su comunicación, ofreciendo soluciones simples, rápidas y efectivas.</p>
                    <p className="texto-quienes-somos">Con experiencia en distintos rubros y un enfoque 100% personalizado, buscamos que cada empresa pueda aprovechar el potencial de la automatización para ahorrar tiempo, aumentar ventas y mejorar la experiencia de sus clientes.</p>
                </div>
                <div className="imagen-quienes-somos">
                    <img src="/imagen-nosotros.png" alt="imagen modo chatbot" />
                </div>
            </section>
            <section className="moving">
                <h3 className="titulo-moving">Marcas que confían en nosotros</h3>
                <div className="logos">
                    <div className="logos-slide">
                    {[...Array(4)].map((_, i) =>
                        logos.map((src, idx) => (
                        <img src={src} alt={`Logo${idx}`} key={`${i}-${idx}`} />
                        ))
                    )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Nosotros;