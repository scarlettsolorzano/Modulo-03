function generatePassword() {
    // Obtener la longitud seleccionada
    let length = document.getElementById("length").value;

    // Inicializar el conjunto de caracteres según las opciones seleccionadas
    let charset = "";
    if (document.getElementById("uppercase").checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("lowercase").checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("numbers").checked) {
        charset += "0123456789";
    }
    if (document.getElementById("symbols").checked) {
        charset += "!@#$%^&*()";
    }

    // Comprobar si se ha seleccionado al menos una opción
    if (charset === "") {
        alert("Por favor, selecciona al menos una opción.");
        return;
    }

    // Generar la contraseña
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Mostrar la contraseña generada en el campo de texto
    document.getElementById("password").value = password;
}
