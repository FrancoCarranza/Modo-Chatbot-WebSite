import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Rutas from "./Rutas";
import Footer from "./components/Footer/Footer";

function App() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Rutas/>
      <Footer/>
    </>
  )
}

export default App;