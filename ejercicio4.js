// Pedimos al usuario las notas separadas por comas
const entradaNotas = prompt("Ingrese las notas separadas por comas (ejemplo: 3.5,4.0,5.0):");

// Convertimos la cadena en un array de números
const notasArray = entradaNotas.split(",").map(nota => parseFloat(nota.trim()));

// Función que calcula el promedio redondeado a 2 decimales
function calcularPromedio(notas) {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    const promedio = suma / notas.length;
    return parseFloat(promedio.toFixed(2));
}

// Mostramos el promedio
const promedioFinal = calcularPromedio(notasArray);
alert("📊 Promedio final: " + promedioFinal);
