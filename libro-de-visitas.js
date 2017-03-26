
	

function duplicar() {

var vistaPrevia = document.getElementById("ingresarComentario").value;
document.getElementById("comentarioEnTiempoReal").innerHTML = vistaPrevia;
}

function colorDeTexto(){
	var eleccionUsuario = prompt("Ingresa el código hexadecimal del color de texto que desees:  ");
	eleccionUsuario = "#" + eleccionUsuario;
	document.getElementById("comentarioEnTiempoReal").style.color = eleccionUsuario;
}




function colorDeFondo(){
	var eleccionUsuario = prompt("Ingresa el código hexadecimal del color de fondo que desees:  ");
	eleccionUsuario = "#" + eleccionUsuario;
	document.getElementById("comentarioEnTiempoReal").style.backgroundColor = eleccionUsuario;
}
function publicarComentario() {
	//Se comienza guardando el valor que el usurio ingrese en la <textarea> en una variable par así poderlo reproducir y publicar.
	var comentario = document.getElementById("comentarioEnTiempoReal").innerHTML;
	//Esta línea indica que desea crea un elemento igual a nuestro parrafo elegidoS
	var comentarioAPublicar = document.createElement("li");
	 comentarioAPublicar.id = comentario;
	comentarioAPublicar.innerHTML = comentario;
	document.getElementById("comentariosPublicados").appendChild(comentarioAPublicar);
	
}
 
 