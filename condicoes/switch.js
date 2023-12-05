var agora = new Date()
var diaS = agora.getDay()
console.log(diaS)

switch (diaS) {
    case 0:
        console.log('Sunday')
        break

    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break

    default:
        console.log('Dia invalido')
        break
}
