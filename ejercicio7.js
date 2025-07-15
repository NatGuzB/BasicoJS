const prompt = require('prompt-sync')();

function retirarDinero() {
    
    const saldo = parseFloat(prompt("Ingrese su saldo actual:"));
    const monto = parseFloat(prompt("Ingrese el monto a retirar:"));

    if (monto > saldo) {
        console.log("Fondos insuficientes");
    } else {
        const nuevoSaldo = saldo - monto;
        console.log("Su nuevo saldo es: ", nuevoSaldo);
    }
}


retirarDinero();
