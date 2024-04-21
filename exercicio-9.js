const prompt = require('prompt-sync')();

let codOrigem = prompt("Digite o código de origem: ");

if (codOrigem == 1) {
    console.log("A origem é Região Sul!");
}
else if (codOrigem == 2) {
    console.log("A origem é Região Norte!");
}
else if (codOrigem == 3) {
    console.log("A origem é Região Leste!");
}
else if (codOrigem == 4) {
    console.log("A origem é Região Oeste!");
}
else if (codOrigem == 5 || codOrigem == 6) {
    console.log("A origem é Região Nordeste!");
}
else if (codOrigem == 7 || codOrigem == 8 || codOrigem == 9) {
    console.log("A origem é Região Sudeste!");
}
else if (codOrigem >= 10 && codOrigem <= 20) {
    console.log("A origem é Região Centro-Oeste!");
}
else if (codOrigem >= 25 && codOrigem <= 50) {
    console.log("A origem é Região Nordeste!");
}
else {
    console.log("Produto Importado!")
}


//Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo