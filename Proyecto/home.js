function postComment(){
    const commentText = document.getElementById('comment').value;
    const commentSection = document.createElement('cooment-section');
    const userName = JASON.parse(localStorage.getItem('loggedUser'));
    const fecha = new Date().toLocaleDateString();

    if (commentText.trim() === '') {
        alert('No puedes dejar el comentario vacío');
        return; // No se ejecuta el código de abajo mi función termina y no hay nada mas que hacer
    }

    const comentariosSection = document.getElementById('section');
    comentariosSection.classList.add('comentario');
    comentariosSection.innerHTML = `<img src="${user.name}</strong> - ${fecha} <br> ${commentText}`;

    commentSection.appendChild(comentariosSection);
    document.getElementById('comment').value = '';
}