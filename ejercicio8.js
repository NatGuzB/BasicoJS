const prompt = require('prompt-sync')();

// Función para obtener tasas de cambio
function obtenerTasaDeCambio() {
  const tasas = {
    USD: 0.00025, // 1 COP = 0.00025 USD
    EUR: 0.00022  // 1 COP = 0.00022 EUR
  };
  return tasas;
}

// Función para convertir moneda
function convertirMoneda() {

  const montoTexto = prompt("Ingrese el monto en COP: ");
  const monto = parseFloat(montoTexto);


  let monedaDestino = prompt("Ingrese la moneda a la que desea convertir (USD o EUR): ");
  monedaDestino = monedaDestino.toUpperCase();

  const tasas = obtenerTasaDeCambio();

  if (monedaDestino === "USD" || monedaDestino === "EUR") {
    const tasa = tasas[monedaDestino];
    const resultado = monto * tasa;
    console.log("El monto convertido es: ", resultado.toFixed(2), " ", monedaDestino);
  } else {
    console.log("Moneda no válida. Solo se permite USD o EUR.");
  }
}

// Llamar a la función
convertirMoneda();
