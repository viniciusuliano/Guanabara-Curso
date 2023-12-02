var velocidade = 70
var limiteVelocidae = 60

if (velocidade > limiteVelocidae) {
    var multa = 1.5
    var valorMulta = velocidade * multa
    console.log(`ACIMA DO LIMITE! MULTA DE ${valorMulta}`)
} if (velocidade == limiteVelocidae) {
    console.log('DIRIGINDO COM SEGURANÇA')
} if (velocidade < limiteVelocidae) {
    console.log('DEVAGAR DEMAIS!')
}