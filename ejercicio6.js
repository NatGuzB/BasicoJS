function contarPalabras(texto) {
  // Quitar espacios
  texto = texto.trim();

  // Si el texto está vacío, no hay palabras
  if (texto === "") {
    return 0;
  }

  // Separar el texto
  const palabras = texto.split(" ");

  // Contador
  let contador = 0;
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] !== "") {
      contador++;
    }
  }

  return contador;
}

const frase = "Hola mundo estamos usando JavaScript";
console.log(frase);
console.log("Esta frase tiene ", contarPalabras(frase), "palabras.");
