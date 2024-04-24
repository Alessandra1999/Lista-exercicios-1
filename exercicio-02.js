const prompt = require('prompt-sync')();

let quantEleitores = parseInt(prompt("Insira a quantidade de eleitores: "));
let quantBrancos = parseInt(prompt("Insira a quantidade de votos em branco: "));
let quantNulos = parseInt(prompt("Insira a quantidade de votos nulos: "));
let quantValidos = parseInt(prompt("Insira a quantidade de votos válidos: "));

function percentual(valor, total) {
    return (valor / total) * 100;
}

let percentBrancos = percentual(quantBrancos, quantEleitores);
let percentNulos = percentual(quantNulos, quantEleitores);
let percentValidos = percentual(quantValidos, quantEleitores);

console.log("A porcentagem de votos em branco é: " + percentBrancos + "%");
console.log("A porcentagem de votos nulos é: " + percentNulos + "%");
console.log("A porcentagem de votos válidos é: " + percentValidos + "%");


/*Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores. */