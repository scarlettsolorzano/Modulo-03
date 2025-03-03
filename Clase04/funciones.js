// Creamos un array vacío donde almacenaremos los títulos de los libros leídos.
let librosLeidos = [];

// Definimos una función para agregar un libro al array.
function agregarLibro(titulo) {
    librosLeidos.push(titulo); // 'push' añade el título al final del array.
}

// Definimos una función para mostrar todos los libros leídos.
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("No has leído ningún libro.");
    } else {
        console.log("Libros que has leído:");
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(librosLeidos[i]);
        }
    }
}

// Agregamos algunos libros a la lista.
agregarLibro("El principito");
agregarLibro("Harry Potter y la piedra filosofal");
agregarLibro("Harry Potter y la cámara secreta");
agregarLibro("Harry Potter y el prisionero de Azkaban");
agregarLibro("Harry Potter y el cáliz de fuego");

// Mostramos la lista de libros leídos.
mostrarLibrosLeidos();
