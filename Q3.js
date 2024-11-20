console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");
let op = prompt("Informe qual operação deseja fazer: ");

let num1 = parseFloat(prompt("Informe o primeiro número: "));
let num2 = parseFloat(prompt("Informe o segundo número: "));

let resultado;

if(op === "1"){
    resultado = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + resultado);
} 
else if(op === "2"){
    resultado = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + resultado);
}
else if(op === "3"){
    resultado = num1 * num2;
    console.log(num1 + " X " + num2 + " = " + resultado);
}
else if(op === "4"){
    resultado = num1 / num2;
    console.log(num1 + " / " + num2 + " = " + resultado);
} else{
    console.log("Operação Inválida!")
}
