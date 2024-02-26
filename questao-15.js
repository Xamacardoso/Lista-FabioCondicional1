import {getnumber,write,par_ou_impar} from "./utils/io_utils.js"


function main(){
    write(" ----- MAIOR SALARIO ENTRE 2 PROFS -----\n")
    write(" ----- PROFESSOR 1 -----\n")
    const h1 = getnumber(" HORAS MINISTRADAS: ")
    const prc1 = getnumber(" PREÇO POR HORA: ")
    write(" ----- PROFESSOR 2 -----\n")
    const h2 = getnumber(" HORAS MINISTRADAS: ")
    const prc2 = getnumber(" PREÇO POR HORA: ")

    const sal1 = h1*prc1
    const sal2 = h2*prc2

    if (sal1>sal2){
        write(` O PROFESSOR 1 TEM O MAIOR SALÁRIO, DE R$ ${sal1.toFixed(2)} `)
    }else if (sal1<sal2){
        write(` O PROFESSOR 2 TEM O MAIOR SALÁRIO, DE R$ ${sal2.toFixed(2)} `)
    }else{
        write(` OS DOIS PROFESSORES TÊM O MESMO SALÁRIO, DE R$ ${sal1.toFixed(2)} `)
    }
}

main()