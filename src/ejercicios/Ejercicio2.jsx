import React, { useRef } from "react"; 

export const subtitulo = "el titulo  ";
export const Estoyaca = "Recogida de Datos";

function Ejercicio2(){
    const eurosRef = useRef();
    const resultadoRef = useRef();

    function calcular(){
        const eurosValue = eurosRef.current.value;
        const dolares = eurosValue * 2;

        resultadoRef.current.innerHTML = dolares;
    }

    return(
        <div>
            <h1>Euros a dolares </h1>
            <input type="text" ref={eurosRef}  placeholder="Ingresa Euros"/>
            <button onClick={calcular}>Enviar</button>
            <div ref={resultadoRef}></div>
        </div>
    )
}


export default Ejercicio2;
