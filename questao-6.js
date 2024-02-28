import { get_number } from "./utils/io_utils.js";
// 6. Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam, verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau).

function main(){

// Entrada
const ang1 = get_number(" ANGULO 1: ")
const ang2 = get_number(" ANGULO 2: ")
const ang3 = get_number(" ANGULO 3: ")
let tipotriang
// Processamento
if (ang1+ang2+ang3==180){
    console.log("É UM TRIANGULO!")
    if (ang1 < 90 && ang2 < 90 && ang3 < 90){
        console.log('E ELE É ACUTÂNGULO')
      }else if (ang1 === 90 || ang2 === 90 || ang3 === 90){
        console.log('E ELE É RETÂNGULO')
      }else{
        console.log('E ELE É OBTUSÂNGULO')
      }
}else{
    console.log("NAO FORMAM UM TRIANGULO!!")
}

}

main()