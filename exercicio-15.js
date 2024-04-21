const prompt = require('prompt-sync')();

let numero = 0.0;
let somaNumeros = 0.0;
let peso = 0.0;
let somaPesos = 0.0;

do {
    numero = parseFloat(prompt("Digite um número decimal (digite 0 para sair): "));
    if (numero !== 0) {
        peso = parseFloat(prompt("Digite o peso do número digitado: "))
        somaNumeros += numero * peso;
        somaPesos += peso;
    }
}
while (numero !== 0);

let mediaPonderada = somaNumeros / somaPesos;
console.log("A média aritmética dos números digitados é: " + mediaPonderada.toFixed(2));


/* Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos. */