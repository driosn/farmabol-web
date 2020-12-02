
let usuarioInput = document.getElementById('usuario');
let contrasenaInput = document.getElementById('contrasena');

let ingresarButton = document.getElementById('ingresar')
    
if (ingresarButton) {
    ingresarButton.addEventListener("click", ingresarAlSistema);
} else {
}

function ingresarAlSistema() {
    console.log(usuarioInput.value);
    console.log(contrasenaInput.value);

    let usuario = usuarioInput.value;
    let contrasena = contrasenaInput.value;

    if (usuario === "farmabol" && contrasena === "farmabol2020") irAPaginaPedidos();
    else mostrarAlertIncorrecto();
}

function irAPaginaPedidos() {
    document.location.href = "http://127.0.0.1:5500/src/paginas/pedidos_principal.html";
}

function mostrarAlertIncorrecto() {
    alert("El usuario o la contraseña son incorrectos")
}
