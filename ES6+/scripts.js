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



