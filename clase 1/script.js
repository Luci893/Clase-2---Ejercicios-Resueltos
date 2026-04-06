// Mostrar mensaje normal
console.log('Hola desde js');
//Mostrar mensaje concatenada una variable
let num = 12;
console.log(`El numero es ${num}`);

// Variables
let nombre = 'Pepita'; // El valor puede cambiar.
const edad = 25; //El valor NO puede cambiar.
var sueldo = 700000; // Variable global, NO recomendable!

// Tipos de Datos
let numero = 42;
let texto = 'Buenas';
let booleano = true;
let arreglo = [1, 2, 3];
let objeto = {nombre: 'Ana', edad: 30}; // Almacena datos en pares clave-valor

// Operadores Aritméticos
let res_suma = 10 + 5;
let res_resta = 10 - 5;
let res_multip = 10 * 2;
let res_div = 10 / 2;
let res_modulo = 10 % 3; //resto de una división

// Operadores de Comparación
let esIgual = 10 == 10;
let esEstricto = 12 === 12;
let esDistinto = 10 != '10';
let esMenor = 2 < 4;
let esMayor = 10 > 5;
let esMen_o_Igual = 4 <= 4;
let esMay_o_Igual = 5 >= 3;

//Operadores Lógicos
let esVerdadero = true && false;
let esVerdadero2 = true || false;
console.log(esVerdadero);

console.log('------------------------');
console.log('Resolución de Actividad Práctica: ');
/* Objetivo: Los estudiantes crearán un archivo JavaScript básico que muestre mensajes en la consola y manipule variables y operadores.

Instrucciones:
1. Crear un archivo HTML básico y enlazar un archivo JavaScript llamado app.js
2. Dentro de app.js, declarar variables con let y const, y mostrar su valor en la consola.
3. Realizar operaciones matemáticas utilizando los operadores aritméticos y mostrar los resultados.
4. Crear una condición que compare dos números y muestre en la consola si son iguales o uno es mayor que otro. */

// 2)
let nombre1 = 'Marta';
const edad1 = 44;
console.log(`Hola, soy ${nombre1} y tengo ${44} años`);

// 3)
let suma = 10+4;
console.log(`La suma entre 10 y 4 es: ${suma}`);

let resta = 10-4;
console.log(`La resta entre 10 y 4 es: ${resta}`);

let multip = 10*4;
console.log(`La multiplicación entre 10 y 4 es: ${multip}`);

let division = 10/2;
console.log(`La división entre 10 y 2 es: ${division}`);

let modulo = 10%3;
console.log(`El modulo entre 10 y 3 es: ${modulo}`);

// 4)
let edad_usuario = 10;
if(edad_usuario >= 18){
    console.log('Eres mayor de edad');
}else{
    console.log('Eres menor de edad');
}