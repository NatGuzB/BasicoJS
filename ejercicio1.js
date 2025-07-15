function calcularPropina(total, porcentaje) {
    const propina = total * (porcentaje / 100);
    const totalConPropina = total + propina;
    return totalConPropina;
}


const totalCuenta = 100; 
const porcentajePropina = 15; 

const montoFinal = calcularPropina(totalCuenta, porcentajePropina);
console.log("Monto final a pagar (incluyendo propina): $" + montoFinal);
