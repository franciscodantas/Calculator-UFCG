const adiciona = document.querySelector('#adiciona');
const media = document.querySelector('#calcula');
var armazenaNotas = []
var contNotas = 0

adiciona.addEventListener('click', function() {
    var nota = parseFloat(document.media.notaV.value)
    var peso = parseFloat(document.media.pesoV.value)
    if (valida(nota,peso)) {
        armazenaNotas[contNotas] = nota
        contNotas++
        armazenaNotas[contNotas] = peso
        contNotas++
    }
})

media.addEventListener('click', function(){
    if (armazenaNotas.length > 0) {
        var dividendo = 0
        var divisor = 0
        for (let index = 0; index < armazenaNotas.length; index += 2) {
            const nota = armazenaNotas[index];
            const peso = armazenaNotas[index + 1];
            dividendo += (nota*peso)
            divisor += peso
        }
        var calculo = dividendo/divisor;
        document.getElementById('resposta').innerHTML = "Sua média é: " + calculo
        armazenaNotas = []
        contNotas = 0
    }
    else{
        document.getElementById('resposta').innerHTML = "Entradas Inválidas, algum campo está vázio" 
    }
    
})

function valida(nota, peso) {
    if (nota == null || isNaN(nota)) {
        return false;
    }
    if (peso == null || isNaN(peso) || peso == 0) {
        return false;
    }
    return true;
}