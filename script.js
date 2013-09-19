var sockets = io.connect('http://127.0.0.1:4000');

$(document).ready(function(){
    $('#formulario').on('submit', enviarNombre);
    
    sockets.on('nombreRecibido', mostrarNombre);
});

function enviarNombre(e){
    e.preventDefault();
    sockets.emit('nombreNuevo', $('#nombre').val());
    $('#nombre').val('');
}

function mostrarNombre(nombre){
    $('#nombres').append('Acaba de entrar: ' + nombre + '<br />');
}