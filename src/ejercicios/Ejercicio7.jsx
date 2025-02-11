import React, { useRef, useState } from "react"; 

// farengheit a celsius pero con useState- multiplicar por 9/5 y sumar 32 , 20°C = 68°F




export const subtitulo = " UseState, Farengheit a Celsius";
export const Estoyaca = "Cambiamos el ejercicio anterior para que sea de farengheit a celsius"; 

function Ejercicio7(){
  const farengheit = useRef();
  const [celsius,SetCelcius] = useState(0);
  function calcular(){
    const farengheitValor = farengheit.current.value;
    const celsiusValor = farengheitValor * 9/5 + 32;
    SetCelcius(celsiusValor);
  }

return(
  <div>
    <input ref={farengheit} type="number" name="" id="" />
    <button onClick={calcular}>converti</button>
    <p>{celsius}</p>
  </div>
)
} 
  export default Ejercicio7;
  
