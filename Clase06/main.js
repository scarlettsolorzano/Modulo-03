/*DOM = document object model (modelo de objetos del documento)
Interdaz que representa al HTML como un árbol de nodos
*/

//Acceder a un elemento del HTML
let titulo = document.getElementById('titulo');
titulo.innerText = 'Don Quijote de la Mancha';
titulo.style.color = 'red';


//Crear un nuevo elemento
let nuevoParrafo = document.createElement('p');
nuevoParrafo.innerText = 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme...';
//Agregar el nuevo elemento al HTML
document.body.appendChild(nuevoParrafo);

const user = "admin";
const password = "1234";

//funcion retraso 
function retraso(){
    setTimeout(() => {
       let parrafoSecundario = document.createElement('p');
         parrafoSecundario.innerText = 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme...';
        document.body.appendChild(parrafoSecundario);
    )}, 3000);
}
retraso();

//Agregar un evento a un elemento que el usuario interactue
document.getElementById('boton').addEventListener("click", function(){
    console.log('El usuario hizo click en el botón');
});

function agregarElemento(){
    let nuevoElemento = document.createElement('h3');
    nuevoElemento.innerText = 'Año publicación';
    document.body.appendChild(nuevoElemento);
}

function LogIn(){
    let usuario = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(user === user && password === pass){
        console.log('Bienvenido');
    }else{
        console.log('Usuario o contraseña incorrectos');
    }
}