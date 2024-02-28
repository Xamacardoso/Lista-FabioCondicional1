import {get_number,write,} from "./utils/io_utils.js"

function main(){
    //Entrada
    const num = get_number('Numero 1: ')
    //Processamento
    
    if (num==2){
        write (` O NUMERO ${num} É PRIMO`)
    }else if ((num == 1)|| (num % 2 == 0) || (num % 3 == 0) || (num % 5 == 0) || (num % 7 == 0)){
        write(` O NUMERO ${num} NÃO É PRIMO`)
    }else {
        write(` O NUMERO ${num} É PRIMO`)
    }
}
main()
