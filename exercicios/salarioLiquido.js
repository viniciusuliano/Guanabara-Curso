function calcular() {
    var horas = document.getElementById('horas')
    var salario = document.getElementById('salario')
    var resultado = document.getElementById('resultado')

    var horasTrabalho = Number(horas.value) * 24
    var salarioBruto = Number(salario.value) * horasTrabalho
    var salarioLiquido = salarioBruto - (salarioBruto * 0.19)
    resultado.innerHTML = `${salarioLiquido}`
}