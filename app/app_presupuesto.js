
function Presupuesto(){

let CantEnviosAno = parseFloat(document.getElementById("CantEnviosAno").value);
let PrecioTotalLibro = parseFloat(document.getElementById("PrecioTotalLibro").value);
var ImpEnvporAno, Excedente, ImpExced, PrecioFinal;


if (CantEnviosAno > 12){
    ImpEnvporAno = 50 * PrecioTotalLibro / 100;

}else {
    ImpEnvporAno = 0;
}   

if(PrecioTotalLibro > 50){

    Excedente = PrecioTotalLibro - 50;

    ImpExced = 50 * Excedente / 100;

}else{
    ImpExced = 0;
}

PrecioFinal = ImpEnvporAno + ImpExced + PrecioTotalLibro;


let resultado = document.getElementById("resultado");

resultado.value = PrecioFinal.toFixed(2);

}


