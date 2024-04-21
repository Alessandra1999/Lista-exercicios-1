const prompt = require('prompt-sync')();

let quantidade = prompt("Digite a quantidade de maçãs compradas: ");
let preco;

if (quantidade >= 12) {
    preco = 0.25;
}
else {
    preco = 0.30;
}

let valorTotal = quantidade * preco;

console.log("O valor total da compra de maçãs é: R$", valorTotal.toFixed(2));

/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */