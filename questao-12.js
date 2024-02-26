import {getnumber,write,par_ou_impar} from "./utils/io_utils.js"


function main(){
    write(" ----- PAR OU IMPAR -----\n")

    const num = getnumber(" QUAL NUMERO DESEJA ANALISAR?: ")
    const par = par_ou_impar(num)
    if (par){
        write(` O NUMERO ${num} é PAR!! `)
    }else{
        write(` O NUMERO ${num} é IMPAR!!!`)
    }
}

main()