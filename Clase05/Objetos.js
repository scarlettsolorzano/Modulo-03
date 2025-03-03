//  Objetos 

const persona = {
    nombre: "Scar",
    edad: 20,
    nacionalidad: "Mexicana",
}

console.log(persona); //acceder a todo el objeto
console.log(persona.nombre); //acceder a una propiedad del objeto

//modificación de valores
persona.nombre = "Scarlett";
console.log(persona);

//añadir valores 
persona.genero = "Femenino";
persona.estatura = 1.65;
console.log(persona);

//eliminar valores
delete persona.estatura;
console.log(persona);

//objetos con metodos (acciones que tienen nuestros objetos)
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Blanco",
    
    arrancar: function(){
        console.log("El coche está arrancando");
    }
}
//acceder a un método del objeto
coche.arrancar(coche.marca);

//metodo abreviado
const calculadora = {
    suma(a, b){
        return a + b;
    }
}
console.log(calculadora.suma(2, 3));

//objetos anidados
const trabajo = {
    nombreDeMarca : "BBVA",
    puesto : "Desarrollador",
    ubicacion: {
        pais: "México",
        ciudad: "CDMX",
    }
}
console.log(trabajo.ubicacion.ciudad);

trabajo.ubicacion.calles = "Reforma";
console.log(trabajo);

//this: hace referencia al objeto que lo contiene
const usuario = {
    nombre: "Scar",
    saludar: function(){
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}
usuario.saludar();

//clases es una plantilla (molde) para crear objetos y asi poder reutilizar código
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}
const persona1 = new Persona("Scar", 20); //crear objeto
persona1.saludar(); // acceder a un método del objeto

const personaOscar = new Persona("Oscar", 25);
personaOscar.saludar();

//herencia: permite que una clase herede propiedades y métodos de otra clase
class Estudiante extends Persona {
    constructor(nombre, edad, carrera, promedio){
        super(nombre, edad);
        this.carrera = carrera;
        this.promedio = promedio;   
    }
    estudiar(){
        console.log(`Estoy estudiando la carrera de ${this.carrera}`);
    }
}

const AnaPaola = new Estudiante("Scar", 20, "Desarrollo de Software", 9);
AnaPaola.estudiar();

