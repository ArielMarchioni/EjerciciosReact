/* mediante 2 input recogerl el ancho y el alto de un rectangulo 
calcular la superfice del recctangulo y mostarlo en pantalla */ 
import React, { useRef } from "react"; 
import { Link } from "react-router-dom";

export const subtitulo = "Superficie de un Rectángulo";
export const Estoyaca = "la descripción del ejercicio";

function Ejercicio4(){

        const alto = useRef();
        const ancho = useRef();
        const resultado = useRef();

        function calcular(){
            const altoValor = alto.current.value
            const anchoValor = ancho.current.value

           const r =  altoValor * anchoValor + " m2"
           resultado.current.innerHTML = r;
          

        }



        return(
            <div className="bg-[#252730] text-white mx-auto mt-8 w-80 p-6 rounded-xl shadow-xl">
                <h1 className="mb-3 text-lg font-semibold text-center">superfice del rectangulo</h1>
                <div className="flex flex-col gap-4">
                    <input type="number" autoFocus  ref={alto} 
                    placeholder="Ingrese el alto del rectángulo"
                     className="p-3 border border-gray-600 bg-[#2a2d35] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"/>
                   
                    <input type="number" ref={ancho} 
                    placeholder="Ingrese el ancho del rectángulo"
                     className="p-3 border border-gray-600 bg-[#2a2d35] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400" />
                    
                    <button onClick={calcular}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold p-3 rounded-lg transition duration-200 shadow-md"
                    >Calcula Superficie</button>
                    
                    <div ref={resultado}  className="text-center text-lg font-medium mt-2"> </div>
                </div>

            </div>
        )

} 
export default Ejercicio4;
