const array = [2, 5, 7, 9, 10];

function somar(array){
    let soma = 0;

    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

let s = somar(array);
console.log("Soma de todos os números do array: " + soma);