const button = document.getElementById('generateQR');

// Función para validar que el campo del input la URL no está vacia ni tiene un mal formato.
button.onclick = () => {
    const input = document.getElementById('inputtxt').value;
    if(input === '' || input === null || !input.match(/^https?:\/\/([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/i)) {
        alert('Tienes que introducir una URL válida');
    } else {
        window.location.href = './qr.html'; // Lo mandamos a nuestra página donde aplicaremos la librería.
    }
}
