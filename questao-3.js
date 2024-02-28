import { get_number, maior3 } from "./utils/io_utils.js";
// 3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

function main(){

// Entrada
const n1 = get_number("Numero 1: ")
const n2 = get_number("Numero 2: ")
const n3 = get_number("Numero 3: ")

// Processamento
const maior = maior3(n1,n2,n3)

// Saída
console.log(`O maior numero é ${maior}`)

}

main()