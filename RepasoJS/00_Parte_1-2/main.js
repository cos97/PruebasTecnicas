// Alertas
//alert("Hola soy Marcos Martin Web");

// Variables
// 'let' tiene mayor rendimiento porque están limitadas al bloque
let nombre = "Marcos Martín";
nombre = "Marcos";

// Constantes
const altura = 179;
const apellido = "Martin"

//altura = 50; //Daría error por intentar modificar constante

// Concatenación
let concat = nombre + " " + apellido

// Mostrar por consola
console.log(nombre);
console.log(altura);
console.log(concat);

// Seleccionar elementos de la página (DOM). Es template string por las comillas invertidas y $
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr>
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${concat}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;

// Condiciones
if(altura >= 175){
    datos.innerHTML += "<h4>Eres alto</h4><hr>";
}else{
    datos.innerHTML += "<h4>Eres bajito</h4><hr>"
}

// Bucles. 
        // Tambien se podría hacer con template String con comillas invertidas, ${year}
for(let year = 2017; year <= 2023; year++){
    datos.innerHTML += "<h4>Estamos en el año: "+year+"</h4>"
}

// Arrays
let nombres =  ["Marcos", "Gema", "Miguel", "David"];

let divNombres = document.querySelector("#nombres");

//divNombres.innerHTML = nombres[0];
divNombres.innerHTML = "<hr><h4>Listado de nombres</h4><ul>";

    // Forma 1
/*nombres.forEach(nombre => {
    divNombres.innerHTML += "<li>"+nombre+"</li>"
});*/
    // Forma 2
for (let nombre of nombres){
    divNombres.innerHTML += "<li>"+nombre+"</li>"

}
divNombres.innerHTML += "</ul>";

// Funciones
const miInformacion = (nombre, altura) => {
    let misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;
    return misDatos;
}

console.log(miInformacion("Max Power", 219));

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion("Max Power", 219)
}

imprimir();
imprimir();
imprimir();