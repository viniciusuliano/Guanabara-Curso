function calcular() {
    var cigarrosPorDia = document.getElementById('cigarrosDia')
    var anos = document.getElementById('qtdAnos')
    var resultado = document.getElementById('resultado')

    var qtdCigarros = Number(cigarrosPorDia.value)
    var anosFumados = Number(anos.value)

    var anosEmDias = anosFumados * 365
    var multiplicaDias = qtdCigarros * anosEmDias
    var multiplica10minutos = multiplicaDias * 10
    var divideDias = multiplica10minutos / 1440
    resultado.innerHTML = `${Math.round(divideDias)}`
}
