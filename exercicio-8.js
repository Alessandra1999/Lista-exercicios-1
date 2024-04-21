const prompt = require('prompt-sync')();

let a = prompt("Digite o primeiro valor: ");
let b = prompt("Digite o segundo valor: ");

if (a > b) {
    console.log(b + ", " + a);
}
else {
    console.log(a + ", " + b);
} 

/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */