var io = require('socket.io').listen(4000);

io.sockets.on("connection", conexion);

function conexion(socket){
    socket.on("nombreNuevo", emitir);
    console.log('Se ha conectado un cliente.');
}

function emitir(data){
    io.sockets.emit("nombreRecibido",data);
    console.log('Se ha agregado el nombre: ' + data);
} 