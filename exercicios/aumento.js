function aumento() {
    var s1 = document.getElementById('salario')
    var s2 = document.getElementById('perCento')
    var resultadoAumento = document.getElementById('aumento')

    var a1 = Number(s1.value)
    var a2 = Number(s2.value)

    var porcentoAumento = (a1 * a2) / 100
    var aumentoSalario = a1 + porcentoAumento
    resultadoAumento.innerHTML = `${Math.round(aumentoSalario)}`
}