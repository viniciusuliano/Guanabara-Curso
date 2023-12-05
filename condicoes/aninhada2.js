var idade = 18
if (idade < 16) {
    console.log('Não pode ser preso')
} else {
    if (idade > 16 && idade < 18) {
        console.log('CONSELHO TUTELAR')
    } else if (idade => 18) {
        console.log('PRISÃO')
    }
}