const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Insira o primeiro número: "));
let num2 = parseInt(prompt("Insira o segundo número: "));
let num3 = parseInt(prompt("Insira o terceiro número: "));

let operacao1 = num1 + 25;
let operacao2 = num2 * 3;
let operacao3 = num3 * 0.12;
let operacao4 = num1 + num2 + num3;

console.log(num1 + " + 25 é igual a: " + operacao1);
console.log("O valor de " + num2 + " triplicado é igual a: " + operacao2);
console.log("12% de " + num3 + " é: " + operacao3);
console.log("A soma de todos os valores originais é: " + operacao4);


/* Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros. */