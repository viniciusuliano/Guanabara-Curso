function gorjeta() {
    var gorJeta = document.getElementById('preco')
    var valorJantar = document.getElementById('jantar')

    var valor = Number(gorJeta.value)
    var valorGorjeta = valor * 0.10
    var valorFinal = valor + valorGorjeta

    valorJantar.innerHTML = `O valor com gorjeta é ${valorFinal}`
}