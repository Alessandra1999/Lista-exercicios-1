const prompt = require('prompt-sync')();

let ava1 = parseFloat(prompt("Digite a nota da avaliação 1: "));
let ava2 = parseFloat(prompt("Digite a nota da avaliação 2: "));

let media = (ava1 + ava2) / 2;

console.log("A média semestral é: " + media);

if(media >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado!");
}
else {
    console.log("Você foi REPROVADO! Estude mais...");
}

/* Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0 */