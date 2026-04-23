// Calculadora simple en consola

// Pedir datos al usuario
let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación(+,-,*,/): ");

let resultado;

// Estructura condicional
if(operacion === "+"){
    resultado = numero1 + numero2;
}else if(operacion === "-"){
    resultado = numero1 - numero2;
}else if(operacion === "*"){
    resultado = numero1 * numero2;
}else if(operacion === "/"){
    resultado = numero2 !== 0 ? numero1 / numero2: "Error: división por cero";
}else{
    resultado = "Operación no válida";
}

console.log(`Resultado ${resultado}`);