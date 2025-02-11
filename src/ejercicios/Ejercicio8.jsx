import React, { useRef, useState } from "react"; 

// farengheit a celsius pero con useState- multiplicar por 9/5 y sumar 32 , 20°C = 68°F




export const subtitulo = " UseState, Mostar imagenes";
export const Estoyaca = "Cada Boton muestra una imagen distinta"; 

function Ejercicio8(){
  const paisajes = {
    imagen1: "https://www.w3schools.com/w3images/fjords.jpg",
    imagen2: "https://www.w3schools.com/w3images/paris.jpg",
    imagen3: "https://www.w3schools.com/w3images/mountains.jpg"
  };
  const [imagen, setImagen] = useState(paisajes.imagen1);

  return (
    <div>
      <img src={imagen} alt="paisajes" />
      <div>
        <button onClick={() => setImagen(paisajes.imagen1)}>Imagen 1</button>
        <button onClick={() => setImagen(paisajes.imagen2)}>Imagen 2</button>
        <button onClick={() => setImagen(paisajes.imagen3)}>Imagen 3</button>
      </div>
    </div>
  );
}

  export default Ejercicio8;
  
