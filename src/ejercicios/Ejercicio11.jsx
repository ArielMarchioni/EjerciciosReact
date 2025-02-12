import React, { useRef, useState } from "react"; 

//1 euro = 2 dolares
export const subtitulo = " Onchange Euros a Dolares";
export const Estoyaca = "Repetimos el Ejercicio pero ahora con Onchange "; ; 


function Ejercicio11() {
  const [euros, setEuros] = useState(0);
  console.log(euros);

  return(
    <div>

      <input  onChange={e => setEuros(e.target.value*2)}  
      type="number" name="" id="" placeholder="ingrese euros" autoFocus required/>
      <p>{euros}$ Dolares</p>
    </div>
  )

}

export default Ejercicio11;





