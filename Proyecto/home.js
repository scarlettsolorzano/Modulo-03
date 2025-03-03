function postComment() {
    const commentText = document.getElementById('comment').value;
    const commentSection = document.getElementById('comment-section');
    const user = JSON.parse(localStorage.getItem('loggedUser'));
    const fecha = new Date().toLocaleDateString();

    if (!user) {
        alert("Debes iniciar sesión para comentar.");
        return;
    }

    if (commentText.trim() === '') {
        alert('No puedes dejar el comentario vacío');
        return;
    }

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    commentDiv.innerHTML = `
        <img src="${user.image}" class="user-image">
        <strong>${user.name}</strong> - ${fecha} <br>
        ${commentText}
        <button class="delete-btn" onclick="deleteComment(this)">Eliminar</button>
    `;

    commentSection.appendChild(commentDiv);
    document.getElementById('comment').value = '';
}

function deleteComment(button) {
    button.parentElement.remove();
}
