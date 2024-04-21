const prompt = require('prompt-sync')();

let numero = 0.0;
let soma = 0.0;
let quantNumeros = 0.0;

do {
    numero = parseFloat(prompt("Digite um número decimal (digite 0 para sair): "));
    if (numero !== 0) {
        soma += numero;
        quantNumeros++;
    }
}
while (numero !== 0);

let media = soma / quantNumeros;
console.log("A média aritmética dos números digitados é: " + media.toFixed(2));


/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */