function Sumar(){
    let num1 = document.getElementById('numero1').value;
    let num2 = document.getElementById('numero2').value;

    let calculo =  parseInt(num1) + parseInt(num2);

    const resultado = document.getElementById('resultado');

    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';

    //Setear el valor
    resultado.innerHTML = calculo;

    
}

function Restar() {
    let limpiar = '';
    let num1 = document.getElementById('numero1').value;
    let num2 = document.getElementById('numero2').value;

    let calculo = parseInt(num1) - parseInt(num2);

    const resultado = document.getElementById('resultado');

    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';

    //Setear el valor
    resultado.innerHTML = calculo;

    

}

function Multiplicar() {
    let num1 = document.getElementById('numero1').value;
    let num2 = document.getElementById('numero2').value;

    let calculo = parseInt(num1) * parseInt(num2);
    let limpiar = 'Resultado';

    const resultado = document.getElementById('resultado');

    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';

    //Setear el valor
    resultado.innerHTML = calculo;
}