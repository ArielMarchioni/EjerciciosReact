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
  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white mx-auto mt-8 w-80 p-6 rounded-xl shadow-xl">
    <h1 className="mb-3 text-lg font-semibold text-center">Euros a dolares </h1>
    <div className="flex flex-col gap-4">
    <input ref={euros} type="number"className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-500" />
    <button  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold p-3 rounded-lg transition duration-200 shadow-md" onClick={convertir}>Convertir</button>
    <p className="mt-2 p-3 text-center text-lg font-medium  text-white rounded-lg min-h-[40px] shadow-sm">{dolares}</p>
    </div>
  </div>
)
} 
  export default Ejercicio6;
  
