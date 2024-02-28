import { get_number } from "./utils/io_utils.js";
// 4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade.

function main(){

// Entrada
const numero = get_number(" DIGITE UM NUMERO DE DOIS DÍGITOS: ")

// Processamento e Saída
if (Math.floor(numero/10)==(numero%10)){
    console.log("\n O ALGARISMO DA DEZENA É IGUAL O DA UNIDADE!")
}
else{
    console.log("\n A UNIDADE É DIFERENTE DA DEZENA!")
}


}

main()