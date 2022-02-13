//Importacion paquete express
const express = require('express');
const path = require('path');
//config leera el archivo .env y establecera
//las variables de entorno
require('dotenv').config();

//Lo inicializamos/App de express
const app = express();

//Node Server - Socket Server
//El paquete http viene instalado con Node
//Usamos toda la conf de express para este servidor
const server = require('http').createServer(app);
//Exportamos el io hacia el archivo socket.io
module.exports.io = require('socket.io')(server);

require('./sockets/socket');



//Path publico / carpeta publica
//dirname apuntara donde esta instalado el server
//ya se en la carpeta con mi nombre o en un server
// de producion que seria 'https' y apuntamos a la 
//carpeta public
const publicPath = path.resolve(__dirname, 'public');

//Le decimos a express la ruta que usarmemos
app.use(express.static(publicPath));

//Escuchamos y si hay un error lo retornamos
//Si no hay errores retornamos el print
//Este servidor ya esta escuchando peticiones
server.listen(process.env.PORT, (err) => {
    if(err) throw new Error(err);
    console.log('Servidor corriendo en puerto', process.env.PORT);
});