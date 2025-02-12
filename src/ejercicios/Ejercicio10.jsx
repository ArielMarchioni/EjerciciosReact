import React, { useRef, useState } from "react"; 

//app presupuestos con useState
export const subtitulo = " Onchange";
export const Estoyaca = "El parametro e hace referencia al evento que se esta ejecutando "; ; 


function Ejercicio10() {
  const [value, setValue] = useState(0);
  console.log(value);
  return(
    <div>
      <input  onChange={e => setValue(e.target.value)} 
      type="text" name="" id="" />
    </div>
  )

}

export default Ejercicio10;