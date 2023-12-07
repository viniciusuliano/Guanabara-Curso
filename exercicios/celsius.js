function conversor() {
    var grausCelsius = document.getElementById('celsius')
    var resultadoConversao = document.getElementById('conversao')

    var grausFehrenheit = Number(grausCelsius.value)
    var conversaoFehrenheit = (grausFehrenheit * 1.8) + 32
    resultadoConversao.innerHTML = `${Math.round(conversaoFehrenheit)}`
}