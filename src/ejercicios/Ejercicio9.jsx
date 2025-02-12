import React, { useRef, useState } from "react"; 

//amcho y alyo de un rectangulo con useState 2 inputs
export const subtitulo = " UseState, Superficie de un rectangulo";
export const Estoyaca = "calculamos la superficie de un rectangulo"; 

function Ejercicio9(){
   const ancho = useRef();
  const alto = useRef();
    const [superficie, setSuperficie] = useState(0);
    function calcular(){
      const anchoValor = ancho.current.value;
      const altoValor = alto.current.value;
      const superficieValor =  anchoValor * altoValor;
      setSuperficie(superficieValor);
    }
  return(
    <div>
      <input ref={alto} type="text" placeholder="Ingresa altura" />
      <input ref={ancho} type="text" placeholder=" ingresa anchura" />
      <button onClick={calcular}>Calcular</button>
      <p>{superficie}</p>

    </div>
  )
}

  export default Ejercicio9;
  
