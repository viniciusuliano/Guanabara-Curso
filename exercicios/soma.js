function soma() {
    var a = document.getElementById('n1')
    var b = document.getElementById('n2')
    var resultado = document.getElementById('resultado')

    var a1 = Number(a.value)
    var b1 = Number(b.value)
    var soma = a1 + b1

    resultado.innerHTML = `A soma dos valores é ${soma}`

}