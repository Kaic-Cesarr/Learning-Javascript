// Exercício 01 -  Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.

let bodyElement = document.querySelector('#app');
let numberInput = document.querySelector('.inputText');

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
    let result = verifyNumber(numberInput.value);

    console.log(result)

    let resultElement = document.createElement("p");
    let resultText = document.createTextNode(result);

    bodyElement.appendChild(resultElement);
    resultElement.appendChild(resultText);

}



// Exercicio 02 - Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 

let bodyElement2 = document.querySelector('#app-02');
let numberInput2 = document.querySelector('#input-02')



let numbers = [4, 5, 1, 3, 7, 9, 12, 14, 18, 20];

function checkNumber(number, array) {
    let busca = array.find((item) => {
        if(number === item) {
            return console.log("existe")
        } else {
            return console.log("não existe")
        }
    })

    console.log(busca)
}

function enterButton2() {
    checkNumber(numberInput2, numbers);
}