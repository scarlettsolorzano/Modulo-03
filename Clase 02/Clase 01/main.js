console.log("Hola Mundo");

//diferencia de var (alcance global) y let (alcance local)  

//datos primitivos
let nombre = "Scar";
let edad = 20;
let esMayorDeEdad = true; //variable declarada o inicializada (tiene una asignación de valor)
let saldo; // undefined
let cuenta = null;
let id= Symbol("id");
let numeroGrande = 122334445555532n; //bigint es un tipo de dato que permite almacenar números enteros de longitud arbitraria

console.log( typeof edad); //typeof devuelve el tipo de dato de la variable

let persona = {
    nombre: "Scar",
    edad: 20,
    nacionalidad: "Mexicana",
}

console.log(persona); //acceder a todo el objeto
console.log(persona.nombre); //acceder a una propiedad del objeto

//array 
let frutas = ["manzana", "pera", "uva"]; //array de 3 elementos
console.log(frutas[0]); //acceder a un elemento del array por posición

//funciones 
let suma = function(a, b){
    return a + b;
}
console.log(suma(2, 3));

let fecha = new Date();
console.log(fecha);

//Actividad 1 uso de diferentes tipos de datos
let miNombre = "Scar";
let miEdad = 20;
let esMayor = true;
let saldoCuenta;
let perfil = null;
let idUsuario = Symbol("id");
let numero = 1234567890123456789012345678901234567890n;

//Mostrar en consola el tipo de dato de cada variable
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esMayor);
console.log(typeof saldoCuenta);
console.log(typeof perfil);
console.log(typeof idUsuario);
console.log(typeof numero);

//Acceder a la información de las variables
console.log(nombre)
console.log(edad)
console.log(esMayor)
console.log(saldoCuenta)
console.log(perfil)
console.log(idUsuario)
console.log(numero)

//objeto persona: Objetos en JavaScript son colecciones de datos y/o funcionalidades 
let personas = {
    nombre: "Scar",
    edad: 20,
    nacionalidad: "Mexicana",
}

//Mostrar en consola el objeto persona
console.log(personas);
//Acceder a la información del objeto persona
console.log(personas.nombre);
console.log(personas.edad);
console.log(personas.nacionalidad);

//array de números. Arrays en JavaScript son objetos especiales que permiten almacenar múltiples valores en una sola variable
let numeros = [1, 2, 3, 4];
//Mostrar en consola el array de números
console.log(numeros);
//Acceder a la información del array de números
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//Función suma: Las funciones son bloques de código que se pueden reutilizar
let sumaNumeros = function(a, b){
    return a + b;
}
//Mostrar en consola el resultado de la función suma
console.log(sumaNumeros(2, 3));
