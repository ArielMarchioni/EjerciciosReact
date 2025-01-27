import React, { useRef } from "react"; 
import { Link } from "react-router-dom";

export const subtitulo = "Use Effect ";
export const Estoyaca = "Recogida de Datos";

function Ejercicio1() {
    const nombreRef = useRef();
    const resultadoRef = useRef();

    function procesar() {
        resultadoRef.current.textContent = nombreRef.current.value;
    }

    return (
        <>
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white mx-auto mt-8 w-80 p-6 rounded-xl shadow-xl">
            <h1 className="mb-3 text-lg font-semibold text-center">💡 Escribe tu Nombre</h1>
            <div className="flex flex-col gap-4">
                <input 
                    className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500" 
                    type="text" 
                    ref={nombreRef} 
                    placeholder="Tu nombre aquí..." 
                    required
                    autoFocus
                />
                <button 
                    onClick={procesar}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-semibold p-3 rounded-lg transition duration-200 shadow-md"
                >
                    Enviar 🚀
                </button>
                <div 
                    ref={resultadoRef} 
                    className="mt-2 p-3 text-center text-lg font-medium bg-white text-gray-800 rounded-lg min-h-[40px] shadow-sm"
                ></div>
            </div>
        </div>
        
        </>
    );
}

export default Ejercicio1;
