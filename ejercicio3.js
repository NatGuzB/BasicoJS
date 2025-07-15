// Inventario predefinido
const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Pantalón", precio: 35 },
];


function buscarProducto(nombre, inventario) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre === nombre) {
            return inventario[i]; 
        }
    }
    return null; 
}

// Pruebas
console.log(buscarProducto("Pantalón", inventario)); 
console.log(buscarProducto("Sombrero", inventario)); 
