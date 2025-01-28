import React, { useRef } from "react"; 

export const subtitulo = "Conversor de Euros a Dólares 💰";
export const Estoyaca = "convertí euros a dólares de forma rápida. Solo ingresá la cantidad en euros, presioná el botón y obtené el resultado en dólares al instante. 🚀";

function Ejercicio2(){
    const eurosRef = useRef();
    const resultadoRef = useRef();

    function calcular(){
        const eurosValue = eurosRef.current.value;
        const dolares = eurosValue * 2;

        resultadoRef.current.innerHTML = dolares + "$ dolares";
    }

    return(
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white mx-auto mt-8 w-80 p-6 rounded-xl shadow-xl">
            <h1 className="mb-3 text-lg font-semibold text-center">Euros a dolares </h1>
            <div className="flex flex-col gap-4">
                <input type="number" ref={eurosRef}  placeholder="Ingresa Euros" autoFocus
                 className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500" />
                <button onClick={calcular}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold p-3 rounded-lg transition duration-200 shadow-md"
                >Enviar</button>
                <div ref={resultadoRef} className="mt-2 p-3 text-center text-lg font-medium  text-white rounded-lg min-h-[40px] shadow-sm"></div>
            </div>
            
        </div>
    )
}


export default Ejercicio2;
