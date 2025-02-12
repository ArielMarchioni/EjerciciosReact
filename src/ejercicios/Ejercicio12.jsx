import React, { useRef, useState } from "react"; 

//1 euro = 2 dolares
export const subtitulo = " Onchange Centigrados a Farenheit";
export const Estoyaca = "Centigrados a farenheit usando onchange "; ; 


function Ejercicio12() {
  const [centigrados, setCentigrados] = useState(0);
  console.log(centigrados);

  return(
    <div>

      <input  onChange={e => setCentigrados(e.target.value*9/5+32)}  
      type="number" name="" id="" placeholder="Centigrados" autoFocus required/>
      <p>{centigrados}º Farenheit</p>
    </div>
  )

}

export default Ejercicio12;





