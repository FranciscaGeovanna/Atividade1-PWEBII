let num1 = prompt("Informe o primeiro número: ");
let num2 = prompt("Informe o segundo número: ");
let num3 = prompt("Informe o terceiro número: ");

let nums = [num1, num2, num3];
nums.sort((a, b) => a - b);

console.log("Números em ordem crescente: " + nums);
