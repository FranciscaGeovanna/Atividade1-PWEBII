function inverterString(str){
    let strInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }
    return strInvertida;
}

let string = prompt("Informe uma frase ou palavra: ");
console.log("Frase ou palavra invertida: " + inverterString(string));