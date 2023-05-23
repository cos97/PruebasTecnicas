"use strict"

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    old: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.old);
        console.log(this.modelo, this.maxima, this.old);
        console.log(this.modelo, this.maxima, this.old);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos();
console.log(coche);

// Promesas
var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos";
        // Si saludo fuera false:
        saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});
