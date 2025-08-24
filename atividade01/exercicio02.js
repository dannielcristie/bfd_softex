// 2. Crie uma função que receba um objeto com nome e idade, e diga se a pessoa é
// maior de idade ou não.

function verificarIdade(pessoa) {
    if (pessoa.idade >= 18) {
        return `${pessoa.nome} é maior de idade.`;
    } else {
        return `${pessoa.nome} é menor de idade.`;
    }
}

const pessoa1 = { nome: "Ana", idade: 22 };
const pessoa2 = { nome: "Danniel", idade: 16 };

console.log(verificarIdade(pessoa1));
console.log(verificarIdade(pessoa2));