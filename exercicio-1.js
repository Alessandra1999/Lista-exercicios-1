const prompt = require('prompt-sync')();
let celsius;
let faren;
let x = "sair";

do {
    celsius = prompt("Insira a temperatura em Celsius para conversão ou 'sair' para parar: ");
    faren = (celsius * 1.8) + 32;
    if (celsius !== x) {
    console.log("A temperatura em Farenheit é: ", faren.toFixed(2));
    }
} 
while (celsius !== x);

//Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
