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
// var lista = ['Steve', 'Mark', 'Bill', 120];
// console.log(lista);
// console.log(lista[0]);
// console.log(lista[2]);

// // Contar quantos elementos a lista possui
// console.log(lista.length); 

// // Encontrar um elemento
// console.log(lista.indexOf('Bill'));

// // Alterar o elemento
// lista[1] = "Zuckeberg"
// console.log(lista);

// lista[3] = 500;
// console.log(lista);

// // Adicionar elemento
// lista.push("Kaic");
// console.log(lista);

// // Remover o primeiro elemento
// lista.shift();
// console.log(lista);

// // Remover o último elemento
// lista.pop();
// console.log(lista);

// // Retornar todos os elementos mas separado por algo. Isso não altera a lista, somente a forma de exibição.
// console.log(lista.join(';'));


// Loops
// var x = 0;

// while(x < 10) {
//     document.write("<br> O valor do X é: " + x);
//     x++;
// }

// for(i = 0; i < 10; i++) {
//     document.write("<br>  " + i);
// }

// var valor = 15

// for(i = 0; i < valor; i++) {
//     document.write("<br>  " + i);
// }


// Switch

function pedir() {
    var valor = prompt("Digite um valor de 1 a 4");

    switch(Number(valor)) {
        case 1:
            alert("Voce escolheu 1 = Suco");
            break;

        case 2:
            alert("Voce escolheu 2 = Agua gelada");
            break;

        case 3:
            alert("Voce escolheu 3 = Sorvete");
            break;

        case 4:
            alert("Voce o garçom");
            break;

        default:
            alert("Escolha uma opção entre 1 a 4.");
            break
    }
}