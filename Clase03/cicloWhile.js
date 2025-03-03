//ciclo while  permite ejecutar un bloque de código repetidamente mientras una condición específica sea verdadera. Esto es útil cuando no sabemos cuántas veces necesitaremos repetir un proceso antes de que se cumpla una condición.

//sintaxis
// while(condición){
//     //código a ejecutar
//}

//ejemplo
let contador = 0;

while (contador <= 5){
    console.log(contador);
    contador++;
}

let suma = 0; let numero = 1; while (suma < 5) { suma += numero; numero++; } console.log(suma);

//ejercicio Problema: Clasificación de Frutas 
// programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

//Declara un arreglo llamado frutas con varios tipos de frutas.

const frutas = ['manzana', 'pera', 'uva', 'pera', 'manzana', 'pera', 'uva', 'pera'];
//Crea un objeto para almacenar la cantidad de cada tipo de fruta.
const conteoFrutas = {};
//Recorre el arreglo frutas y cuenta cuántas frutas hay de cada tipo.
//Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
let i = 0;
while (i < frutas.length){
    const fruta = frutas[i];
    if (conteoFrutas[fruta]){
        conteoFrutas[fruta]++;
    }else{
        conteoFrutas[fruta] = 1;
    }
    i++;
}
//Imprime en la consola la cantidad de cada tipo de fruta.
console.log(conteoFrutas);

//implementar la solución con el otro ciclo también (for/while)
//solucion con for
const conteoFrutas2 = {};
for (let i = 0; i < frutas.length; i++){
    const fruta = frutas[i];
    if (conteoFrutas2[fruta]){
        conteoFrutas2[fruta]++;
    }else{
        conteoFrutas2[fruta] = 1;
    }
}