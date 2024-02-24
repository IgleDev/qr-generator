const div = document.getElementById('qrcode');
const input = localStorage.getItem('input');    // Cojemos el input guardado en el LocalStorage
const btnDownload = document.getElementById('btnDown');
const btnCopyQR = document.getElementById('btnCopyQR');

var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: input,
	width: 250,
	height: 250,
	colorDark : "#000000",
	colorLight : "#ffffff",
    id : 'qrImg',
	correctLevel : QRCode.CorrectLevel.H
});

//Creamos un función para que cuando hagamos click se nos guarde
btnDownload.onclick = () => {
    let img = document.querySelectorAll('img')[1].src;  //Buscamos la imagen en el array y cogemos su src
    let linkImg = document.createElement('a');  //Creamos un a para hacer el efecto download
    linkImg.href = img; //Le pasamos la imagen como referencia
    linkImg.download = `qrcode${input}`;    //Cuando la descarguemos esta tendra 'qrcode' más el texto
    linkImg.target = '_blank';  // Ponemos el atributo blank para que no tengamos que ir a otra página
    linkImg.click();    // Simulamos el boton click de un elemento a y ya se nos descarga
}

btnCopyQR.onclick = () => {
    let pag = window.location;
    const copiarContenido = async () => {
        try {
          await navigator.clipboard.writeText(pag);
          console.log('Contenido copiado al portapapeles');
        } catch (err) {
          console.error('Error al copiar: ', err);
        }
    }
    copiarContenido();
}