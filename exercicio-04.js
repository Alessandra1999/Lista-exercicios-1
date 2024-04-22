const prompt = require('prompt-sync')();

let ava1 = parseFloat(prompt("Digite a nota da avaliação 1: "));
let ava2 = parseFloat(prompt("Digite a nota da avaliação 2: "));

let media = (ava1 + ava2) / 2;

console.log("A média semestral é: " + media);

if(media >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado!");
}

/*Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação). */