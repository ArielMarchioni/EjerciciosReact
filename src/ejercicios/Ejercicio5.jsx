import React, { useState } from "react"; 


export const subtitulo = "Use State ";
export const Estoyaca = "use state para contar clicks en un boton  " ;

function Ejercicio5() {
    const [contador, setContador] = useState(0);
  
    function calcular() {
      setContador(contador + 1);
    }
  
    return (
      <div className="flex justify-center items-center m-auto w-80  h-80 bg-gradient-to-r from-green-300 to-blue-400">
        <button 
          className="bg-red-500 text-white text-2xl font-bold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-110 active:scale-95"
          onClick={calcular}
        >
          {contador}
        </button>
      </div>
    );
  }
  
  export default Ejercicio5;
  
