// Exercício 01 -  Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.

let bodyElement = document.querySelector('#app');
let inputElement = document.querySelector('.inputText');

function verifyNumber(number) {
    if(number < 0) {
        return `O número ${number} é negativo`
    } else if(number > 0) {
        return `O número ${number} é positivo`
    } else {
        return `O número ${number} é igual a zero`
    }
}


function enterButton() {
    let result = verifyNumber(inputElement.value);

    console.log(result)

    let resultElement = document.createElement("p");
    let resultText = document.createTextNode(result);

    bodyElement.appendChild(resultElement);
    resultElement.appendChild(resultText);

}



