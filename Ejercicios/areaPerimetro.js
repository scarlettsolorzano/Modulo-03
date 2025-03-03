// Pedir al usuario el valor del lado del cuadrado
let lado = parseInt(prompt("Introduce el valor del lado del cuadrado:"));

// Calcular el área y el perímetro
let area = lado * lado;  // El área de un cuadrado es lado^2
let perimetro = 4 * lado;  // El perímetro de un cuadrado es 4 veces el lado

// Mostrar los resultados en un alert
alert("El área del cuadrado es: " + area + "\nEl perímetro del cuadrado es: " + perimetro);
