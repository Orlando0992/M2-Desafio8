//Permite mostar msj informativos
$(document).ready(function () {
    $("button").tooltip()
})

//Se crea evento para mostrar msj de correo enviado
$('#enviar_correo').click(function () {
    alert("El correo fue enviado correctamente")
})

//Permite cambiar de color titulo "h5"
$("h5").click(function () {
    $(this).css({
        "color": "red",
        "font-size": "2rem"
    })
})

//Permite mostrar u ocultar texto en las tarjetas
$('.card-title').click(function(){
    $('.recetas-relacionadas p').toggle("hide");
})