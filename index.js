const path= require('path');
const express= require('express');
const app=express();//contiene la configuracion del servidor

//configuramos el puerto
//con process.env.PORT toma el puerto del SO, sino toma el puerto 3000
app.set('port', process.env.PORT || 3000);

//vamos a enciar archivos estaticos
//usamos un modulo de express para usar archivos estaticos
//con __dirname se puede obtener la ruta del proyecto como tal
app.use(express.static(path.join(__dirname,'public')));
//con eso estamos enviando la carpeta  entera public al navegador



//aqui ya uso el puerto y lo inicio
const servidor = app.listen(app.get('port'),()=>{
    console.log(app.get('port'));
});


//aqui voy a requerir el modulo de socket para empezar a usarlo
const SocketIO= require('socket.io');

//necesita de un servidor para la conexion bidireccional
//pasamos la configuracion de app express que almacenamos abajo en la variable const server
const io=SocketIO(servidor);

//aqui usaremos websockets
//cuando alguien se conecte io.on me permitira ejecutar codigo
io.on('connection',(socket)=>{
    var contador=io.engine.clientsCount;
    //socket.on('chat:message',(data)=>{
        
        //con esto reenvio los datos a todos los clientes
        //este emit es para emitir datos a todos los clientes, incluyendome
        //io.sockets.emit('chat:message',data);
        //console.log(data);
        
        io.sockets.emit('numero-sesion',contador);
    //})
    console.log('nueva conexion',socket.id,' ',contador);
});
//con la variable socket se puede puede recibir la informacion del cliente



