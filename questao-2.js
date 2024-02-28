import {get_number, maior2, menor2} from "./utils/io_utils.js";
// 2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

function main(){

// Entrada
const num1 = get_number("Numero 1: ")
const num2 = get_number("Numero 2: ")

// Processamento
const maior = maior2(num1, num2)
const menor = menor2(num1, num2)

// Saída
console.log(`\n
MAIOR NUMERO: ${maior}
MENOR NUMERO: ${menor}`)

}

main()