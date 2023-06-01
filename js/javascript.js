let edad = prompt("Ingrese su edad por favor:");

function acceso() {
    if (edad < 18) {
        alert("Tené cuidado. Este sitio es para mayores, vas a entrar bajo tu responsabilidad.");
    } else {
        alert("Bienvenido a la página. Espero que te sirva la información.");
    }
}

acceso();