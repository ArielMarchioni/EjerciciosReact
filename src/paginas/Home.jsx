import { useState, useEffect } from "react";
import TarjetaEjercicio from "../componentes/TarjetaEjercicio";

function Home() {
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    // Importa dinámicamente todos los archivos de ejercicios/
    const modulos = import.meta.glob("../ejercicios/Ejercicio*.jsx");

    //console.log(modulos); 
    // Carga los módulos y extrae la descripción de cada uno
    const ejerciciosCargados = Object.entries(modulos).map(async ([ruta, resolver], indice) => {
      const mod = await resolver(); // Cargar el módulo
      //console.log(mod);  
      return {
        id: indice + 1,
        titulo: `Ejercicio ${indice + 1}`,
        ruta: ruta.replace("../ejercicios/", "").replace(".jsx", ""),
        subtitulo: mod.subtitulo || "Sin descripción disponible.", 
      };
    });

    // Aca espera la promesa de todos los ejercicios cargadoss
    Promise.all(ejerciciosCargados).then(setEjercicios);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-white ">Ejercicios de React</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ejercicios.map((ej) => (
          <TarjetaEjercicio key={ej.id} id={ej.id} titulo={ej.titulo} subtitulo={ej.subtitulo} />
        ))}
      </div>
    </div>
  );
}

export default Home;
