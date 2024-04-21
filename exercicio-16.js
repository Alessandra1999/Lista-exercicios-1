function primo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let contador = 1;
let num = 100;
 
do {
    if (primo(num)) {
        console.log(num);
        contador++;
    }
    num++
} 
while (contador <= 50);


/* Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */
