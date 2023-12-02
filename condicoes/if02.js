function nacional() {

    var nacionalidadeInput = document.querySelector('#nacionalidade')
    var resultadoNacional = document.querySelector('div#resultado')

    var nacionalidade = nacionalidadeInput.value.toLowerCase()
    if (nacionalidade === 'brasileiro') {
        resultadoNacional.innerHTML = 'BRASIL!'
    } if (nacionalidade != 'brasileiro') {
        resultadoNacional.innerHTML = 'GRINGO'
    }
}