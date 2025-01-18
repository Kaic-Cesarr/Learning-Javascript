// Desconstruindo Objetos ----------------------------

let pessoa = {
    nome: "Kaic",
    sobrenome: "Cesar",
    cargo: "Full Stack Developer" 
};
console.log(pessoa);


const {nome, sobrenome, cargo:funcao} = pessoa; // Podemos acessar com o nome que passamos entre chaves e alterar o nome da propriedade (caso existe uma variável criada com o nome respectivo)
console.log(nome);
console.log(sobrenome);
console.log(funcao)




//  Desconstruir Array ----------------------------

let listNomes = ["Kaic", "Matheus", "Cesar"];
console.log(listNomes);

// Forma 1:
let {0:Kaic, 2:Cesar} = listNomes;
console.log(Kaic);
console.log(Cesar);

// Forma 2:
let [primeiroNome, segundoNome] = listNomes;
console.log(primeiroNome);
console.log(segundoNome);




// Spread Operator ---------------------

// Nesse exemplo, queremos adicionar os valores de um Array dentro de outro Array
let primeiros = [1, 2, 3];

//let numeros = [primeiros, 4, 5, 10]; // Dessa forma não irá funcionar, pois estamos passando O ARRAY e não OS VALORES DO ARRAY
let numeros = [...primeiros, 4, 5, 10]; // ... --> Spread = passa os valores
console.log(numeros) 


// Spread em objetos ---------------------
let car = {
    marca: "Porsche",
    modelo: "Taycan",
    ano: 2024
}

let disponibilidade = {
    ...car, // Spread
    cor: "Branco",
    cidade: "Goiânia"
}

console.log(disponibilidade)


// Outro exemplo

function newUser(info) {
    let data = {
        ...info,
        status: "Ativo",
        matricula: "112"
    };

    console.log(data)
}

newUser({nome: "Kaic", sobrenome: "Cesar", cargo: "Full Stack Developer"});




// Rest Operator ---------------------

// Quando utilizamos esse método, significa que estamos solicitando ao parâmetro que receba os argumentos mas não sabemos quantos irá receber e ele trata como array
function convidados(...nomes) {
    console.log("Seja bem vindo todos convidados");
    console.log(nomes)
}
convidados("Kaic", "Cesar", "Andrade", "Gabriela", "Steve");


function sorteador(...numeros) {
    console.log(numeros);

    const num = Math.floor(Math.random() * numeros.length)
    // Floor -> Deixe apenas numeros inteiros
    // Random -> Sorteia aletorio

    console.log(num); // Opcao 1
    console.log("O numero gerado foi: ", numeros[num]); // Opcao 1
}
sorteador(1, 2, 3, 4, 5, 6, 7)



// Operações em Array 

// MAP -> Percorret todo o array
let lista = ["Kaic", "Jose", "Matheus"];

lista.map((item, index) => { 
    console.log(`Passando ${item} - esta na posição: ${index}`);
})


// Reduce -> Busca reduzir um aray
let numbers = [52, 3, 2];
let total = numbers.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} total até o momento`);
    console.log(`${numero} valor atual`);
    console.log(`${indice} posição`);
    console.log(`${original} array original`);

    console.log("------------------------")

    return acumulador += numero
}) 
console.log(`Total do reduce: ${total}`);


//  Find -> Buscar algo
let listagem = [5, 3, "Jose", 1, "Kaic"];

let busca = listagem.find((item) => {
    if(item === "Kaic") {
        return console.log("Item encontrado com sucesso.")
    }
});
console.log(busca);


// Filter -> Filtrar
let palavras = ["Apple", "Meta", "X", "Youtube"];

let result = palavras.filter((item) => {
    return item.length < 6;
})

console.log(result)



// Funções anônimas ---------------------

/* 
    () => {}

    1 - Os parênteses, que é por onde a função recebe os argumentos (assim como nas funções tradicionais)
    2 - Arrow =>
    3 - Chaves, o bloco de código que representa o corpo da função

*/
// Padrão
function somar(a, b) {
    let total = a + b
    return console.log(total);
}
somar(13, 9);

// Anônima
let subtrair = (a, b) => {
    let total = a - b
    console.log(total);
}
subtrair(8, 5)

// Exemplo
let nums = [1, 4, 2, 56, 9];
nums.map((item) => { 
    console.log(item)
});