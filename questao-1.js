import {get_number} from "./utils/io_utils.js";
// 1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

function main(){

// Entrada
const num1 = get_number("Numero 1: ")
const num2 = get_number("Numero 2: ")
const num3 = get_number("Numero 3: ")

// Processamento e Saída
if (num1 == num2 == num3){
console.log("Todos os 3 números são iguais.")
}else if (num1 == num2 || num1 == num3 || num2 == num3){
    console.log("Há 2 numeros iguais.")
}else{
    console.log("Não há numeros iguais.")
}

}

main()