//users}
const users = [
    {name: "Scarlett Solórzano", username: "scar", password: "123456", Image: "https://static.wikia.nocookie.net/esharrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg/revision/latest/thumbnail/width/360/height/360?cb=20160903184919"},
    {name: "Jimena Rodríguez", username: "jime", password: "789012", Image: "https://hips.hearstapps.com/hmg-prod/images/draco-malfoy-1573306817.jpg?resize=640:*"},
    {name: "Luisa Fernanda", username: "luisa", password:"345678", Image: "https://hips.hearstapps.com/hmg-prod/images/protagonistas-harry-potter-1642579994.jpeg?crop=0.563xw:1.00xh;0.203xw,0&resize=640:*"},
    ];


function logIn() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
    const userFind = users.find(user => user.username === username && user.password === password);

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind));
        window.location.href = "home.html";
    }else{
        error.textContent = "Usuario o contraseña incorrectos";
    }
}