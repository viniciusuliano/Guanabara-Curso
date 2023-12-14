function calcular() {
    var area = document.getElementById('metros')
    var resultado = document.getElementById('resultado')

    var areaMetros = Number(area.value)
    var calculaLitros = areaMetros / 3
    var qtdLatas = calculaLitros / 18
    resultado.innerHTML = `${Math.floor(qtdLatas)}`

}