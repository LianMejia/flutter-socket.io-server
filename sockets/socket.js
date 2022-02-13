//Importamos io
const {io} = require('../index');

//Mensaje de Sockets
//Server creado y encendido
//El cliente es un computador o dispositivo que se
//acaba de conectar al socket server
//Cuando la app cargue se conectara directamente 
//al socket server
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
        console.log('cliente desconectado')
    });
    //Recibimos el mensaje en el back enviado
    //desde el frontend
    client.on('mensaje', function(payload){
        console.log('mensaje', payload);
    });
    //Emitimos un mensaje hacia el frontend
    client.emit('recibido', {recibido: 'mensaje recibido'});
});