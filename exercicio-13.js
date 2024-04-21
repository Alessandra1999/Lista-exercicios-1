const prompt = require('prompt-sync')();
let N;
let multiplicacao;

for (let i = 1; i <= 5; i++) {
    N = prompt("Digite o " + i + "° valor: ");
    for (let j = 1; j <= N; j ++) {
        multiplicacao = i * j;
        console.log(j + " x " + i + " = " + multiplicacao);
    }
}


/* Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N */