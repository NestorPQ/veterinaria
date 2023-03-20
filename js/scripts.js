function saludar(){
    alert("Hola querida mascotas")
}


function presentarse(){
    alert("Te saluda");
}

const botonSaludo = document.getElementByID("saludar");

botonSaludo.addEventListener("click", saludar);