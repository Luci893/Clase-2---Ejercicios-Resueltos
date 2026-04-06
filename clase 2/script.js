// Clase Nº 2 - Ejercicios de Sintaxis Básica

// Ejercicio 1
let nombre = 'Luciana';
console.log(`Mi nombre es ${nombre}`);

// Ejercicio 2
let a = 2;
let b = 4;
let resultado = a + b;
console.log(`El resultado de sumar a y b es: ${resultado}`);

// Ejercicio 3
let esMayor = 10 > 5;
console.log(esMayor);

let esMenor = 5 < 2;
console.log(esMenor);

// Ejercicio 4
let edad = 47;
const altura = 1.65;

edad = 57;
//altura = 1.78; Da error ya que no se puede cambiar las variables que sean const.

console.log(edad);
console.log(altura);

// Ejercicio 5
let suma = 4+6; // Esta línea de código suma dos números y lo guarda en suma.

// Ejercicio 6
const verdadero = true;
let esVerdadero = verdadero && false;
console.log(esVerdadero);

// Ejercicio 7
let tipoDato = typeof(78);
console.log(tipoDato);

// Ejercicio 8
let arreglo = ['a', 'b', 'c', 'd', 'e'];
console.log(arreglo[3]);

// Ejercicio 9
let modulo = 17 % 3;
console.log(modulo);

// Ejercicio 10
let cantidad;
console.log(cantidad);

// Clase Nº 2 - Ejercicios de Estructuras de control

// Ejercicio 1
let num = -7;
if(num>0){
    console.log("Es positivo");
}else if(num<0){
    console.log("Es negativo");
}else{
    console.log("Es nulo");
}

// Ejerciocio 2
let dia = 6;
switch(dia){
    case 1: console.log("Lunes"); break;
    case 2: console.log("Martes"); break;
    case 3: console.log("Miércoles"); break;
    case 4: console.log("Jueves"); break;
    case 5: console.log("Viernes"); break;
    case 6: console.log("Sábado"); break;
    case 7: console.log("Domingo"); break;
    default: console.log("Número de día no válido")
}

// Ejercicio 3
for (let i=1; i<=10; i++){
    console.log(i);
}

// Ejercicio 4
let num1 = 6;
let resultado1 = 1;
let i = 1;

while(i <= num1){
    resultado1 *= i;
    i++;
}
console.log(`El factorial de ${num1} es ${resultado1}`)

// Ejercicio 5
edad_Usuario = 14;
if (edad_Usuario>=16) {
    console.log(`Puede votar`)
} else {
    console.log(`No puede votar`)
}

// Ejercicio 6
let listaPares = []
for(let i=1; i<=20; i++){
    if(i % 2 == 0){
        listaPares.push(i);
    }
}
console.log(`Los pares entre 1 y 20 son ${listaPares}`);

// Ejercicio 7
let calificacion = 'B';
switch (calificacion) {
    case 'A': console.log("Excelente! Estas aprobado"); break;
    case 'B': console.log("Muy Bien! Estas aprobado"); break;
    case 'C': console.log("Bien! Estas aprobado"); break;
    case 'D': console.log("Insuficiente! Estas reprobado"); break;
    case 'F': console.log("Estas reprobado"); break;
    default: console.log("Ingrese una calificación válida (A,B,C,D,F)"); 
}

// Ejercicio 8

/* const number1 = parseFloat(prompt('Ingresa el primer número: ')); 
const number2 = parseFloat(prompt('Ingresa el segundo número: '));

if(number1>0 && number2>0){
    suma = number1 + number2;
    alert(`La suma de los números ingresados es: ${suma}`)
}else{
    alert("Debe ingresar valores positivos")
} */

// Ejercicio 9
let j = 10;
while (j != 0) {
    console.log(j);
    j--;
}

// Ejercicio 10
let operador = '-';
let numero1 = 6;
let numero2 = 4;

switch(operador){
    case '-': console.log(`La resta es ${numero1-numero2}`); break;
    case '+': console.log(`La suma es ${numero1+numero2}`); break;
    default: console.log('Debe ingresar un operador de suma(+) o resta(-)');
}

// Clase Nº 2 - Ejercicios de Funciones

//Ejercicio 1
function calcular_AreaTriangulo(base, altura){
    resultado = (base*altura)/2;
    return `El area del triangulo es ${resultado}`;
}
console.log(calcular_AreaTriangulo(4, 6));

// Ejercicio 2
let parOimpar = function(valor){
    if(valor % 2 == 0){
        return 'El valor es par';
    }else{
        return 'El valor es impar';
    }
}
console.log(parOimpar(9));

// Ejercicio 3
const multiplicacion = (a, b) => a * b;
console.log(multiplicacion(24, 99));

// Ejercicio 4
function convertirAmayus(cadena){
    return cadena.toUpperCase();
}
console.log(convertirAmayus('Hola, buenas tardes'));

// Ejercicio 5
function mayorNumero(num1, num2){
    let mayor = 0;
    if(num1>num2){
        mayor = num1;
    }else{
        mayor = num2;
    }
    return `El mayor número es ${mayor}`;
}
console.log(mayorNumero(3, 5));

// Ejercicio 6
function invertirCadena(cadena){
    let resultado = '';
    
    for(let i = cadena.length-1; i>=0; i--){
        resultado += cadena[i];
    }

    return resultado;
}
console.log(invertirCadena('Caramelo'));

// Ejercicio 7
function celsiusAFahrenheit(gradoCelsiu){
    let resultadoF = 0;
    resultadoF = (1.8 * gradoCelsiu) + 32;
    return `${gradoCelsiu}°C es igual a ${resultadoF}°F`;
}
console.log(celsiusAFahrenheit(17));

// Ejercicio 8 
// Palindromo es una palabra que se lee igual de izquierda a derecha y viceversa
function esPalindromo(texto){
    let textoNormal = texto;
    let textoInvertido = '';
    
    for(let i = textoNormal.length-1; i>=0; i--){
        textoInvertido += textoNormal[i];
    }
    if((textoNormal.toLowerCase()) == (textoInvertido.toLowerCase())){
        return `La palabra ${texto} es palíndromo`;
    }else{
        return `La palabra ${texto} NO es palíndromo`;
    }
}
console.log(esPalindromo('Radar'));

// Ejercicio 9
function sumarArreglo(arreglo){
    let suma = 0;

    for(let i=0; i<arreglo.length; i++){
        if(typeof arreglo[i] === 'number'){
            suma += arreglo[i];
        }else{
            return 'Debe ingresar un arreglo de números solamente';
        }
    }
    return suma;
}
const numeros = [1, 4, 5, 7, 8];
console.log(sumarArreglo(numeros));

// Ejercicio 10
function sumarNumeros(a, b){
    return (a + b);
}

function multiplicarNumeros(a, b){
    return (a * b);
} 

function restarNumeros(a, b){
    return (a - b);
}

function dividirNumeros(a, b){
    if(b != 0){
        return (a / b);
    }else{
        return `No puedes dividir por cero`;
    }
}

console.log(dividirNumeros(2, 8));

// Ejercicios de tabla de la verdad
let precio = 60000;
let esPremium = false;

if (precio > 50000 || esPremium) {
    console.log("Este producto tiene envío gratis");
} else {
    console.log("Debe abonar el costo de envío");
}

