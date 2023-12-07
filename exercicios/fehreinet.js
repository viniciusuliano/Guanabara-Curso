function conversor() {
    var recebeFehrenheit = document.getElementById('fehreinet')
    var valorConvertido = document.getElementById('conversao')

    var trataFehrenheit = Number(recebeFehrenheit.value)
    var converteCelsius = (trataFehrenheit - 32) / 1.8
    valorConvertido.innerHTML = `${converteCelsius}`
}