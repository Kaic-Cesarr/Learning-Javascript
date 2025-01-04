// Comandos iniciais 
// var firstName = prompt("Primeiro nome");
// var lastName = prompt("Último nome");
// console.log('Olá', firstName + ' ' + lastName);


// Adicionar elementos no HTML
// var completeName = firstName + ' ' + lastName
// document.write("<h1> Bem vindo " + completeName +  " </h1>");
// document.write("<img src='https://sujeitoprogramador.com/steve.png' alt='Foto do Steve Jobs' />")


// Funções
// var area = document.getElementById('area')

// function entrar() {
//     var nome = prompt("Digite seu nome");

//     if(nome === ' ' || nome === null || nome === '') {
//         alert("ops. Algo deu errado.")
//         area.innerHTML = "Clique no botão para acessar"
//     } else {
//         area.innerHTML = "Bem vindo " + nome + ' ';

//         let botaoSair = document.createElement("button");
//         botaoSair.innerText = "Sair da conta";

//         botaoSair.onclick = sair;

//         area.appendChild(botaoSair)
//     }
// }

// function sair() {
//     alert("Até mais!");
//     area.innerHTML = "Você saiu";
// }

// Funções Parametrizada
// function mediaAluno(nota1, nota2) {
//     var media = (nota1 + nota2) / 2;

//     if(media >= 6.0) {
//         console.log("Aluno APROVADO com a média: " + media);
//     } else if(media <= 3.0) {
//         console.log("Aluno REPROVADO com a média: " + media);
//     } else {
//         console.log("Aluno em RECUPERAÇÃO: " + media);
//     }
// }


// Arrays
var lista = ['Steve', 'Mark', 'Bill', 120];
console.log(lista);
console.log(lista[0]);
console.log(lista[2]);

// Contar quantos elementos a lista possui
console.log(lista.length); 

// Encontrar um elemento
console.log(lista.indexOf('Bill'));

// Alterar o elemento
lista[1] = "Zuckeberg"
console.log(lista);

lista[3] = 500;
console.log(lista);

// Adicionar elemento
lista.push("Kaic");
console.log(lista);

// Remover o primeiro elemento
lista.shift();
console.log(lista);

// Remover o último elemento
lista.pop();
console.log(lista);

// Retornar todos os elementos mas separado por algo. Isso não altera a lista, somente a forma de exibição.
console.log(lista.join(';'));


