import { get_number, validar_data } from "./utils/io_utils.js";
// 10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

function main(){

// Entrada
const ano = get_number(" ANO: ")
const mes = get_number(" MES: ")
const dia = get_number(" DIA: ")
// Processamento
const valido = validar_data(dia,mes,ano)

// Saída
if (valido){
    console.log(" A DATA É VALIDA!")     
}else{
    console.log(" DATA INVÁLIDA")
    main()
}

}

main()