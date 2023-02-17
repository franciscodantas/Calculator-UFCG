var gerar = document.querySelector('#calcula');

gerar.addEventListener('click', function(){
    var media = parseFloat(document.media.mediaV.value)
    
    if(valida(media)){
        if (media >= 7) {
            document.getElementById('resposta').innerHTML = "Já está aprovado";
            return;
        }
        if (media <= 4) {
            document.getElementById('resposta').innerHTML = "Já está reprovado";
            return;
        }
        var final = ((5 - (0.6*media))/0.4) + 0.01;
        document.getElementById('resposta').innerHTML = "Deve tirar nota maior que: " + final.toFixed(1)
    }else{
        document.getElementById('resposta').innerHTML = "Digite uma nota válida!"
    }

})

function valida(media){
    if (media == null || isNaN(media)) {
        return false;
    }

    return true
    
}