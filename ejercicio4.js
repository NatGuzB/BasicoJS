const prompt = require('prompt-sync')();


let entrada = prompt("Ingrese las notas separadas por comas (por ejemplo: 3.5, 4.0, 5.0):");


let partes = entrada.split(",");
let notas = [];

for (let i = 0; i < partes.length; i++) {
  let notaComoTexto = partes[i].trim(); 
  let notaComoNumero = parseFloat(notaComoTexto); 
  notas.push(notaComoNumero); 
}


let suma = 0;
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

// Promedio
let promedio = suma / notas.length;

// Redondeo
let promedioFinal = Math.round(promedio * 100) / 100;

// Resultado
console.log("El promedio final es: ",  promedioFinal);
