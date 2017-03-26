function design()
{ 
      document.getElementById("ingresarComentario").style.backgroundColor="#e9e9e9"; 
      document.getElementById(men).style.color="#d32e12";
}

function duplicarComentario() {

var ingresarComentario = document.getElementById("ingresarComentario").value;
var comentarioEnTiempoReal = document.getElementById("comentarioEnTiempoReal").value;
document.getElementById("ingresarComentario").value = document.getElementById("comentarioEnTiempoReal").value;
}

function publicarComentario() {
	var comentario = document.getElementById("ingresarComentario").value;
	var comentarioAPublicar = document.createElement("span");
	comentarioAPublicar.innerHTML = comentario;
	document.getElementById("comentariosPublicados").appendChild(comentarioAPublicar);
}