/*
    Abaixo de 17 - Muito baixo
    Entre 17 e 18,49 - Abaixo do peso
    Entre 18,5 e 24,99 - Peso normal
    Entre 25, 29,99 - Acima do peso
*/

var peso;
var altura;
var imc;
var result;

function calcular(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    result = document.getElementById('result');

    if(imc < 17) {
        result.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuidado! Você está muito abaixo do peso!';
    } else if(imc > 17 && imc < 18.5) {
        result.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Você está abaixo do peso!';
    } else if(imc >= 18.5 && imc < 25) {
        result.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Você está no peso ideal';
    } else if(imc >= 25 && imc < 30) {
        result.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Você está acima do peso!';
    } else if(imc >= 30) {
        result.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado! Obesidade.';
    }

    // imc.toFixed(x) --> Casas decimais 
}