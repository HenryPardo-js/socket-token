
const path = require('path')
const express = require('express')
const app = express()
const socketIO = require('socket.io')

app.set('port',process.env.PORT || 3000)

//Permitir que express tenga acceso a archivos del cliente
app.use(express.static(path.join(__dirname, '..','client')))

const server=app.listen(app.get('port'),()=>{
    console.log('Servidor http://localhost:3000/')
})

const io=socketIO.listen(server)


io.on('connection',(socket)=>{
    var contador = io.engine.clientsCount;
    console.log('Nueva conexion',socket.id, ' ',contador)

    socket.on('mensaje-cliente',(data)=>{
        socket.broadcast.emit('mensaje-servidor',data);
        console.log('Token enviado');
        //io.emit('mensaje-servidor',data)
    })
    socket.on('confirma',(mensaje2)=>{
        socket.broadcast.emit('msg-server',mensaje2);
        console.log(mensaje2);
    });
    /* var respuesta="Token recibido"

    socket.on('usuario-escribiendo',(respuesta)=>{
        //Emitir a todos excepto el que envia
        socket.broadcast.emit('usuario-escribiendo',respuesta)
    }) */
    
    socket.emit('conectados',contador);
})




