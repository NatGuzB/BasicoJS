const prompt = require('prompt-sync')();

function validarContraseña(contraseña) {
   
    const tieneLongitud = contraseña.length >= 8;

    
    const tieneNumero = /[0-9]/.test(contraseña);

  
    const tieneMayuscula = /[A-Z]/.test(contraseña);

 
    return tieneLongitud && tieneNumero && tieneMayuscula;
}


console.log(validarContraseña("abc123")); 
console.log(validarContraseña("Abc12345")); 
console.log(validarContraseña("abcdefgH")); 
