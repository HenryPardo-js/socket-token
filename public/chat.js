//io hace posible la conexion con el backend desde el frontend
const socket=io();

//let message= document.getElementById('message');
//let username= document.getElementById('username');
//let btn= document.getElementById('send');
let output= document.getElementById('output');
//let action= document.getElementById('action');

/* btn.addEventListener('click',function(){
    //este emit es para emitir datos al servidor
    socket.emit('chat:message',{
        message: message.value,
        username: username.value
    });
}); */

//escucha los datos del servidor
//socket.on('chat:message',function(data){
//    output.innerHTML += `<p>
//    <strong>${data.username}</strong>:${data.message}
//    </p>`
//    console.log(data);
//});

socket.on('numero-sesion',contador=>{
    output.innerHTML = `<h1>
    ${contador}
    </h1>`
    console.log(i);
});