function BinarioADecimal(num) {
    let numeroDecimal = 0;
    for (let i = 0; i < num.length; i++)
        numeroDecimal = numeroDecimal + (num[num.length - 1 - i] * Math.pow(2, i));
    return numeroDecimal
}




function DecimalABinario(num) {
    let numeroBinario = "";
    while (num) {
        numeroBinario = num % 2 + numeroBinario;
        num = Math.floor(num / 2);
    }
    return numeroBinario

}


module.exports = {
    BinarioADecimal,
    DecimalABinario,
}