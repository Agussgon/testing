 
//import { suma } from "./operaciones";


 // Definicion de variables
 let num1Input = document.getElementById("num1");
 let num2Input = document.getElementById("num2");
 let resultado = document.getElementById("resultado");

 function sumar(){

 let num1 = parseFloat(num1Input.value);
 let num2 = num2Input.value;
 let resultadoSuma

 if (!isNaN(num1) && num2) {
      resultadoSuma="La suma es: " + num1+num2
     resultado.textContent = resultadoSuma  //
 } else {

     resultado.textContent = "Error: los datos ingresados son inválidos.";
  }

 }
 function reset(){
     num2Input.value=""
     num1Input=""
     resultado.value=""

 }

 

 