function converte() {
    var conversão = document.getElementById('number')
    var r = document.getElementById('resultado')

    var a = Number(conversão.value)
    var convertido = (a * 1000)
    r.innerHTML = `metros para milimetros ${convertido}`
}