
function duplicar() {

var vistaPrevia = document.getElementById("ingresarComentario").value;
document.getElementById("comentarioEnTiempoReal").innerHTML = vistaPrevia;


}

function publicarComentario() {
	//Se comienza guardando el valor que el usurio ingrese en la <textarea> en una variable par así poderlo reproducir y publicar.
	var comentarioPublicado = document.getElementById("comentarioEnTiempoReal").innerHTML;
	//Esta línea indica que desea crea un elemento igual a nuestro parrafo elegidoS
	var espacioParaPublicar = document.createElement("li");
	espacioParaPublicar.innerHTML = comentarioPublicado;
	document.getElementById("comentariosPublicados").appendChild(espacioParaPublicar);
	
	}

function letraChica(){
	var tamañoChico = document.getElementById("comentarioEnTiempoReal");
	tamañoChico.style = "font-size: 12px";
}

function letraMediana() {
	var tamañoMedio = document.getElementById("comentarioEnTiempoReal");
	tamañoMedio.style = "font-size: 25px";
}

function letraGrande(){
	var tamañoGrande = document.getElementById("comentarioEnTiempoReal");
	tamañoGrande.style = "font-size: 40px"
}
function colorDeTexto(){
	var eleccionUsuario = prompt("Ingresa el código hexadecimal del color de texto que desees:  ");
	eleccionUsuario = "#" + eleccionUsuario;
	document.getElementById("comentarioEnTiempoReal").style.color = eleccionUsuario;
}

function alinearIzquierda() {
	var aLaIzquierda = document.getElementById("comentarioEnTiempoReal");
	aLaIzquierda.style.textAlign = "left";
}

function centrar() {
	var centrar = document.getElementById("comentarioEnTiempoReal");
	centrar.style.textAlign = "center";
}

function alinearDerecha() {
	var aLaDereha = document.getElementById("comentarioEnTiempoReal");
	aLaDereha.style.textAlign = "right";
}


function colorDeFondo(){
	var eleccionUsuario = prompt("Ingresa el código hexadecimal del color de fondo que desees:  ");
	eleccionUsuario = "#" + eleccionUsuario;
	document.getElementById("comentarioEnTiempoReal").style.backgroundColor = eleccionUsuario;
}

 