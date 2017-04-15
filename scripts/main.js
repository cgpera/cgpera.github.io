var miImage = document.querySelector('img');

miImage.onclick = function() {
    var miSrc = miImage.getAttribute('src');
    if(miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute ('src','images/hotdog.png');
    } else {
      miImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function seleccionnombre(){
	var miNombre = prompt('Por favor ingresa tu nombre.');
	localStorage.setItem('nombre', miNombre);
	miTitulo.innerHTML = 'Estamos probando JavaScript, ' + miNombre;
}

if(!localStorage.getItem('nombre')) {
    seleccionnombre();
}
else {
    var storedName = localStorage.getItem('nombre');
    miTitulo.innerHTML = 'JavaScript es muy poderoso, ' + storedName;
}

miBoton.onclick = function() {
	seleccionnombre();
}