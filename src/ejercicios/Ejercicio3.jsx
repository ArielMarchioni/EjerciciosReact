import React, { useRef } from "react";

function Ejercicio3() {

    const centigrados = useRef();
    const resultado = useRef();

    function calcular(){
        const centigradosValor = centigrados.current.value;
        const fahrenheit = centigradosValor * 9/5 + 32;

        resultado.current.innerHTML = fahrenheit + "°F";
    }

    return(

        <div>
            <input type="number"  ref={centigrados} />
            <button onClick={calcular}>Enviar</button>
            <div ref={resultado}></div>
        </div>
    )
}

export default Ejercicio3;