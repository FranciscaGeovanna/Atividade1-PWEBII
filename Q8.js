let numeros = prompt("Infroem três números separados por espaço: ");

const nums = numeros.split(" ").map(Number);
let maiorNum = Math.max(...nums);

console.log(maiorNum + " é o maior número");