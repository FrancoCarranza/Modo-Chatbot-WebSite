import { Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Politicas from "./components/Politicas/Politicas";
import Terminos from "./components/Terminos/Terminos";
import NotFound from "./components/NotFound/NotFound";

function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Container />} />
            <Route path='/privacy-policy' element={<Politicas />} />
            <Route path='/terms-and-conditions' element={<Terminos />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default Rutas;