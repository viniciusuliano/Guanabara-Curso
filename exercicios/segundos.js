function diaSegundos() {
    let dias = document.getElementById('dias')
    let horas = document.getElementById('horas')
    let minutos = document.getElementById('minutos')
    let segundos = document.getElementById('segundos')
    let converte = document.getElementById('segundosDias')

    let converteDia = Number(dias.value)
    let converteHora = Number(horas.value)
    let converteMinutos = Number(minutos.value)
    let converteSegundos = Number(segundos.value)

    let contagemDia = converteDia * 86400
    let contagemHora = converteHora * 3600
    let contagemMinutos = converteMinutos * 60
    let contagemSegundos = converteSegundos

    let soma = contagemDia + contagemHora + contagemMinutos + contagemSegundos

    converte.innerHTML = `${soma} segundos`


}   