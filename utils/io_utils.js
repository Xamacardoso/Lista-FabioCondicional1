import { question } from "readline-sync"

export function write(mensagem){
    console.log(mensagem)
}

export function getnumber(numero){
    return Number(question(numero)) 
}

export function opcao3(){
    const num1 = getnumber(" NUM. 1: ")
    const num2 = getnumber(" NUM. 2: ")
    const num3 = getnumber(" NUM. 3: ")
    const opcao = getnumber("\n ESCOLHA UMA OPÇÃO, DE 1 a 3: ")
    
    
    if (opcao==1){
        write(`\n O NUMERO ESCOLHIDO FOI ${num1}`)
    }else if (opcao==2){
        write(`\n O NUMERO ESCOLHIDO FOI ${num2}`)
    }else if (opcao==3){
        write(`\n O NUMERO ESCOLHIDO FOI ${num3}`)
    }else{
        write(`\n NUMERO INVÁLIDO!!!`)
        opcao3()
    }
}

export function par_ou_impar(num){
    if (num % 2 ==0){
        return true
    }else{
        return false
    }

}