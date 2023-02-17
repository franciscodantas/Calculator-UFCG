const adiciona = document.querySelector('#adiciona');
const cra = document.querySelector('#calcula');
var medias = []
var cont = 0


adiciona.addEventListener('click', function(){
    var media = parseFloat(document.media.mediaV.value)
    if(valida(media)){
        medias[cont] = media
        cont += 1
    }
})

cra.addEventListener('click', function(){
    if (medias.length > 0) {
        var soma = 0
        for(var i = 0; i < cont; i++){
            soma += medias[i]
        }
        var calculo = soma / cont
        document.getElementById('resposta').innerHTML = "Seu CRA é: " + calculo
        cont = 0
        medias = []
    }else{
        document.getElementById('resposta').innerHTML = "Nenhum resultado encontrado"
    }
    
})

function valida(media){
    if (media == null || isNaN(media)) {
        return false;
    }

    return true
    
}