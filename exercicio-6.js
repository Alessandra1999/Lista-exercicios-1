const prompt = require('prompt-sync')();

let a = parseInt(prompt("Digite o primeiro valor: "));
let b = parseInt(prompt("Digite o segundo valor: "));
let c = parseInt(prompt("Digite o terceiro valor: "));

if (a < (b + c) && b < (a + c) && c < (a + b)) {
    console.log("Forma um triângulo.");

    if (a == b && b == c) {
        console.log("É um triângulo equilátero.")
    }
    else if (a == b || a == c || b == c) {
        console.log("É um triângulo isósceles.");
    }
    else {
        console.log("É um triângulo escaleno.");
    }
}
else {
    console.log("Não forma um triângulo.");
}





/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */