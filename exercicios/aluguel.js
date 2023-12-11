function calcular() {
    let dias = document.getElementById('dias')
    let km = document.getElementById('km')
    let valor = document.getElementById('valor')

    let diasConvertidos = Number(dias.value)
    let kmConvertidos = Number(km.value)

    let somaDosDias = (diasConvertidos * 60) + (kmConvertidos * 0.15)
    valor.innerHTML = `VALOR = ${somaDosDias}`
}