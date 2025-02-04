import React, { useState } from "react"; 


export const subtitulo = "Use State ";
export const Estoyaca = "use state para contar clicks en un boton  " ;

function Ejercicio5() {

    const [contador, setContador] = useState(0);
    function calcular(){
        setContador(contador + 1);
    }


    return(
        <div><button onClick={calcular} >
             {contador}</button></div>
    )

}

export default Ejercicio5;

