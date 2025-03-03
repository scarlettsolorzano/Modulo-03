const users = [
    {name: "Scarlett Solórzano", username: "scar", password: "123456", image: "https://static.wikia.nocookie.net/esharrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg"},
    {name: "Jimena Rodríguez", username: "jime", password: "789012", image: "https://hips.hearstapps.com/hmg-prod/images/draco-malfoy-1573306817.jpg"},
    {name: "Luisa Fernanda", username: "luisa", password:"345678", image: "https://hips.hearstapps.com/hmg-prod/images/protagonistas-harry-potter-1642579994.jpeg"}
];

function logIn() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    const userFind = users.find(user => user.username === username && user.password === password);

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind));
        window.location.href = "home.html";
    } else {
        error.textContent = "Usuario o contraseña incorrectos";
    }
}
