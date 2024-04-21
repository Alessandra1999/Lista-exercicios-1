const prompt = require('prompt-sync')();

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return "PAR";
    } else {
        return "ÍMPAR";
    }
}

let num;

do {
    num = parseInt(prompt("Digite um número inteiro (negativo ou nulo para encerrar o programa): "));
    if (num < 0 || isNaN(num)) {
        console.log("Fim do programa.")
    } else {
        console.log("O número é " + parOuImpar(num));
    }
}
while (num >= 0);

/* Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO. */

