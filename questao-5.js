import { get_number} from "./utils/io_utils.js";
// 5. Leia 3 (três) números e escreva-os em ordem crescente.

function main(){

// Entrada
const n1 = get_number(" Numero 1: ")
const n2 = get_number(" Numero 2: ")
const n3 = get_number(" Numero 3: ")

// Processamento
let maior, meio, menor
    if (n1>n2&& n1>n3){
        maior = n1
        if (n2>n3){
            meio = n2
            menor = n3
        }else{
            meio = n3
            menor =n2
        }
    }else if (n1<n2&& n1<n3){
        menor = n1
        if (n2>n3){
            maior = n2
            meio = n3
        }else{
            maior = n3
            meio =n2
        }
    }else{
        meio = n1
        if (n2>n3){
            maior = n2
            menor = n3
        }else{
            maior = n3
            menor = n2
        }
    }

// Saída
console.log(` A ordem crescente dos números é: ${menor} < ${meio} < ${maior}`)

}

main()