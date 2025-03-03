// Definimos el objeto libro
const libro = {
    titulo: "Harry Potter y las Reliquias de la Muerte",
    autor: "J.K. Rowling",
    year: 2007,
    estado: "disponible",
    
    // Método para imprimir la información del libro
    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.year}, el estado es: ${this.estado}.`);
    }
};

// Llamamos al método para mostrar la información del libro
libro.describirLibro();
