let nombre = 'Raudyn';
console.log(nombre);

let numero1 = 12;
let numero2 = 567;
let resultado = numero1 + numero2;
console.log(resultado);

if (numero1 > numero2) {
    console.log('Numero 1 es mayor a numero 2');
} else {
    console.log('Numero 2 es mayor a numero 1');
}

//Ejemplos de creación de un array
const listadoNumeros = [456, 23, 668, 745, 125, 63];
console.log(listadoNumeros[3]);

//Uso del for para recorrer el array
for (let contador = 0; contador < listadoNumeros.length; contador++) {
    console.log('El valor del array en la posición ' + contador + ' es: ' +  listadoNumeros[contador]);
}

//Uso de un array de manera dinámica
const listadoPersonas = [];
listadoPersonas.push('Raudyn');
listadoPersonas.push('Elena');
listadoPersonas.push('Michi');
listadoPersonas.push('enner');
listadoPersonas.push('Sil');

for (let contador = 0; contador < listadoPersonas.length; contador++) {

    if (listadoPersonas[contador] == 'Eduardo') {
        console.log('Esta en la lista');
    }else {
        console.log('No esta en la lista');
    }
}

//Validación == y ===

let x = 10;
let y = '10';

if (x === y) {
    console.log(' No son iguales');
}

