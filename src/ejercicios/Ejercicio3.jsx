import React, { useRef } from "react";


export const subtitulo = "🔥 Conversor de Celsius a Fahrenheit en React 🌡️";
export const Estoyaca = "Este componente en React permite convertir temperaturas de grados Celsius a Fahrenheit utilizando useRef. Se obtiene el valor desde un input, se realiza el cálculo sin re-renderizar el componente y se muestra el resultado en pantalla. Ideal para practicar el uso de referencias en React. 🚀";


function Ejercicio3() {

    const centigrados = useRef();
    const resultado = useRef();

    function calcular(){
        const centigradosValor = centigrados.current.value;
        const fahrenheit = centigradosValor * 9/5 + 32;

        resultado.current.innerHTML = fahrenheit + "°F";
    }
    return (
        <div className="bg-[#252730] text-white mx-auto mt-8 w-80 p-6 rounded-xl shadow-xl">
          <h1 className="mb-3 text-lg font-semibold text-center">Celsius a Fahrenheit</h1>
          <div className="flex flex-col gap-4">
            <input 
              type="number"  
              ref={centigrados}  
              autoFocus 
              placeholder="Ingresa grados Celsius"
              className="p-3 border border-gray-600 bg-[#2a2d35] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
            />
            <button 
              onClick={calcular}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold p-3 rounded-lg transition duration-200 shadow-md"
            >
              Enviar
            </button>
            <div ref={resultado} className="text-center text-lg font-medium mt-2"></div>
          </div>
        </div>
      );
      
      
      
      
}

export default Ejercicio3;