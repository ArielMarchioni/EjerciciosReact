import React, { useRef, useState } from "react"; 

// De euros a dolares pero con useState


export const subtitulo = "Use State Conversor de Euros a Dolares";
export const Estoyaca = "Euros a Dolares"; 

function Ejercicio6(){
  const euros= useRef();
  const [dolares, setDolares] = useState(0);

  function convertir(){
    const eurosValor = euros.current.value;
    const dolaresValor =  eurosValor * 2;
    setDolares(dolaresValor);
}

return(
  <div>
    <input ref={euros} type="number" />
    <button onClick={convertir}>Convertir</button>
    <p>{dolares}</p>
  </div>
)
} 
  export default Ejercicio6;
  
