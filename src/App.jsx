import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";

import PaginaEjercicio from "./paginas/PaginaEjercicio";

function App() {
  return (
    <Router basename="/EjerciciosReact" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio/:id" element={<PaginaEjercicio />} />
      </Routes>
    </Router>
  );
}

export default App;
