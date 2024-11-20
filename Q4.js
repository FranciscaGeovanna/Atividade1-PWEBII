function ContarVogais(string){
    const vogais = string.match(/[aeiou]/gi);
    const quant = vogais.length; 
    return quant;
}

let string = prompt("Escreva uma palavra ou frase: ");
console.log("Quantidade de vogais: " + ContarVogais(string));
