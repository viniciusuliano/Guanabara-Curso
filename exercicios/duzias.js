function duzias() {
    var ovos = document.getElementById('ovos')
    var resultado = document.getElementById('resultado')

    var ovosDuzias = (Number(ovos.value) * 0.12)
    resultado.innerHTML = `${Math.floor(ovosDuzias)}`
}