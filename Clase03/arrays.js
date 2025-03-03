//arrays estructura de datos que permite almacenar múltiples valores en una sola variable.

//Array de frutas 

let frutas = ['manzana', 'plátano', 'naranja']; 

// Array de números 

let numeros = [1, 2, 3, 4, 5]; 

// Array vacío 

let vacio = [];

let fruta = ['manzana', 'naranja', 'plátano', 'kiwi'];

frutas[0] //corresponde a 'manzana'
frutas[1] //corresponde a 'naranja'
frutas[2] //corresponde a 'plátano'
frutas[3] //corresponde a 'kiwi'

console.log(frutas[0]); // Salida: "manzana"

console.log(frutas[2]); // Salida: "plátano"

frutas[1] = 'pera'; 

// Ahora el array es ['manzana', 'pera', 'plátano', 'kiwi']

frutas.push('kiwi');

console.log(frutas); 

// Imprime: ['manzana', 'pera', 'naranja', 'kiwi']

/*Ejercicio Práctico
1. Crear un Array: Crea un array llamado colores con al menos cuatro colores diferentes.
let colores = ['rojo', 'verde', 'azul', 'amarillo'];

2. Imprimir el Segundo Color: Imprime el segundo color del array.
console.log(colores[1]); // Imprime: verde

3. Modificar el Tercer Color: Cambia el tercer color a otro color de tu elección.
colores[2] = 'naranja'; // Cambia 'azul' a 'naranja'

4. Añadir un Nuevo Color: Añade un nuevo color al final del array.
colores.push('violeta');

5. Eliminar el Primer Color: Elimina el primer color del array y muestra el resultado.
colores.shift();

console.log(colores); // Muestra el array modificado*/

let frutas = ['manzana', 'fresa', 'naranja'];
console.log(frutas[2]); 

let colores = ['rojo', 'verde', 'azul']; 
[1] = 'amarillo'