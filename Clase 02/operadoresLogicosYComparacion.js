//operadores de comparación
// == igual a
// === estrictamente igual a
// != diferente de
// !== estrictamente diferente de
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que


//operadores lógicos 
// && and
// || or
// ! not

let edad = 20;

if (edad >= 18) {

   console.log("Puedes votar");

}

if (condición) {

    // código que se ejecuta si la condición es verdadera
 
 } else {
 
    // código que se ejecuta si la condición es falsa
 
 }
console.log(0 === false)

//Ejercicio 1
//Problema: Evaluador de notas con mensajes personalizados

let nota = 75;

if(nota >=90){
    console.log("Excelente");
} else if (nota >= 75 && nota < 89){
    console.log("Bien");
} else if (nota >= 60 && nota < 74){
    console.log("Suficiente");
}else {
    console.log("Reprobado");
}