import { get_number, e_triangulo } from "./utils/io_utils.js";
// 7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).

function main(){

// Entrada
const lado1 = get_number("LADO 1: ")
const lado2 = get_number("LADO 2: ")
const lado3 = get_number("LADO 3: ")

// Processamento e Saída
if (e_triangulo(lado1,lado2,lado3)){
    console.log(" É UM TRIANGULO!!")
    if (lado1 == lado2 && lado2 == lado3){
        console.log(" E ELE É EQUILÁTERO!")
    }else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log(" E ELE É ISOSCELES!")
    }else{
        console.log(" E ELE É ESCALENO")
    }
}else{
    console.log(" NAO É UM TRIANGULO!!")
}



}

main()