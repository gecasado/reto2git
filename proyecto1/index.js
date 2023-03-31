function suma (op1, op2,op3){
    let resultado = op1 + op2 + op3;
    console.log(resultado);
}
function resta (op1, op2){
    let resultado = op1 - op2;
    console.log(resultado);
}
function producto (op1, op2){
    let resultado = op1 * op2;
    console.log(resultado);
}
function division(op1, op2){
    let resultado = op1 / op2;
    console.log(resultado);
}
function cuadrado(op1) {
    let resultado = op1 * op1;
    console.log(resultado);
}
module.exports={suma, resta, producto, division,cuadrado}
