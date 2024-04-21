function verificar(numero) {
    return numero % 11 === 5;
}

for (let i = 1000; i <= 1999; i++){
    if (verificar(i)) {
        console.log(i);
    }
}


/* Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5. */