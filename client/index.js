//io("http://localhost:3000/")
let socket=io()

var mensaje="TOKEN RECIBIDO"
var mensaje2="EL TOKEN SI LLEGÓ"
let usuario=""
let btn=document.getElementById('enviar')
let conversacion=document.getElementById('conversacion')
let acciones=document.getElementById('acciones')
let btn_respuesta=document.getElementById('responder')
let contenedor=document.getElementById('boton_extra')

btn.addEventListener('click',()=>{
    socket.emit('mensaje-cliente',{mensaje:mensaje,usuario:usuario})
    mensaje=''
})

/* mensaje.addEventListener('keypress',()=>{
    socket.emit('usuario-escribiendo',usuario.value)
}) */

socket.on('mensaje-servidor',(data)=>{
    acciones.innerHTML=''
    conversacion.innerHTML+=`<p><strong>${data.usuario}</strong> ${data.mensaje}</p>`
});
socket.on('msg-server',(mensaje2)=>{
    acciones.innerHTML=''
    conversacion.innerHTML+=`<p><strong>${mensaje2}</strong></p>`
});
socket.on('conectados',contador=>{
    console.log(contador);
    if (contador>1){
        /* contenedor.innerHTML=`<hr>
        <button id="responder">Confirmar recibo de token</button>
        ` */
        btn.style.display='none';
        btn_respuesta.style.display='inline';

    }
});

/* socket.on('usuario-escribiendo',(confirmacion)=>{
    acciones.innerHTML=`<p><strong>${usuario} </strong>escribiendo...</p>`
}) */

btn_respuesta.addEventListener('click',()=>{
    socket.emit('confirma',mensaje2)
    console.log(mensaje2);
});
