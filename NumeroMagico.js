let numero = []
let sorteio = []
let tentativasMagicoFacil = 1
let tentativasMagicoMedio = 1
let tentativasMagicoDificil = 1


document.getElementById("divMagicoModoFacil").style.display = 'none'
document.getElementById("divMagicoModoMedio").style.display = 'none'
document.getElementById("divMagicoModoDificil").style.display = 'none'
document.getElementById("divPainel").style.display = 'none'
document.getElementById("divVoltar").style.display = 'none'

function facilMagico(){
    document.getElementById("divMagicoModoFacil").style.display = 'inline'
    document.getElementById("divPainel").style.display = 'inline'
    document.getElementById("divVoltar").style.display = 'inline'
    document.getElementById("divMagicoModoMedio").style.display = 'none'
    document.getElementById("divMagicoModoDificil").style.display = 'none'
    document.getElementById("divJogos").style.display = 'none'
    document.getElementById("inpNumeroMagicoFacil").focus()
    sorteio = Math.round(Math.random() * 10)
    
}

function tenteMagicoFacil(){
    numero = document.getElementById("inpNumeroMagicoFacil").value
    
    if (numero < sorteio) {
        document.getElementById("inpNumeroMagicoFacil").focus()
        document.getElementById('divPainel').innerHTML = 'O número sorteado é maior' + '<br>' +
        'Quantidade de tentativas: ' + tentativasMagicoFacil++
    }
        if (numero > sorteio) {
            document.getElementById("inpNumeroMagicoFacil").focus()
            document.getElementById('divPainel').innerHTML = 'O número sorteado é menor' + '<br>' + 
            'Quantidade de tentativas: ' + tentativasMagicoFacil++ 
        }

    if (tentativasMagicoFacil >= 4){
        document.getElementById('divPainel').innerHTML = 'Acabou as chances do nível Fácil, o número era: ' + sorteio      
     } 
    }
    
    function tenteDeNovoMagicoFacil(){   
        sorteio = Math.round(Math.random() * 10)
        tentativasMagicoFacil = 1
        document.getElementById('divPainel').innerHTML = 'Pode começar, outro número foi gerado!'
        document.getElementById("inpNumeroMagicoFacil").focus()
        document.getElementById("inpNumeroMagicoFacil").value = ''
    }
    
    function medioMagico() {
    document.getElementById("divMagicoModoMedio").style.display = 'inline'
    document.getElementById("divPainel").style.display = 'inline'
    document.getElementById("divVoltar").style.display = 'inline'
    document.getElementById("divMagicoModoDificil").style.display = 'none'
    document.getElementById("divMagicoModoFacil").style.display = 'none'
    document.getElementById("divJogos").style.display = 'none'
    document.getElementById("inpNumeroMagicoMedio").focus()
    sorteio = Math.round(Math.random() * 50)
}

function tenteMagicoMedio(){
    numero = document.getElementById("inpNumeroMagicoMedio").value
    
    if (numero < sorteio) {
        document.getElementById("inpNumeroMagicoMedio").focus()
        document.getElementById('divPainel').innerHTML = 'O número sorteado é maior' + '<br>' +
        'Quantidade de tentativas: ' + tentativasMagicoMedio++
}
        if (numero > sorteio) {
        document.getElementById("inpNumeroMagicoMedio").focus()
        document.getElementById('divPainel').innerHTML = 'O número sorteado é menor' + '<br>' + 
        'Quantidade de tentativas: ' + tentativasMagicoMedio++
}
     if (numero == sorteio) {
        document.getElementById("inpNumeroMagicoMedio").focus()
        document.getElementById('divPainel').innerHTML = 'Acertou!'+ '<br>' + 
        'Quantidade de tentativas: ' + tentativasMagicoMedio 
        }
     if (tentativasMagicoMedio >= 6){
        document.getElementById("inpNumeroMagicoMedio").value = ''
        document.getElementById('divPainel').innerHTML = 'Acabou as chances do nível Médio, o número era: ' + sorteio  
        document.getElementById('divPontuação').innerHTML = 'Sua pontuação é: 0 pontos' 
}
}

function tenteDeNovoMagicoMedio(){
    contador = 0
    sorteio = Math.round(Math.random() * 50)
    tentativasmagicoMedio = 1
    document.getElementById('divPainel').innerHTML = 'Pode começar, outro número foi gerado!'
    document.getElementById("inpNumeroMagicoMedio").focus()
    document.getElementById("inpNumeroMagicoMedio").value = ''
}

function dificilMagico() {
    document.getElementById("divMagicoModoDificil").style.display = 'inline'
    document.getElementById("divPainel").style.display = 'inline'
    document.getElementById("divVoltar").style.display = 'inline'
    document.getElementById("divMagicoModoMedio").style.display = 'none'
    document.getElementById("divMagicoModoFacil").style.display = 'none'
    document.getElementById("divJogos").style.display = 'none'
    document.getElementById("inpNumeroMagicoDificil").focus()

 
    sorteio = Math.round(Math.random() * 100)
}

function tenteMagicoDificil(){
    numero = document.getElementById("inpNumeroMagicoDificil").value

    if (numero < sorteio) {
        document.getElementById("inpNumeroMagicoDificil").focus()
        document.getElementById('divPainel').innerHTML = 'O número sorteado é maior' + '<br>' +
        'Quantidade de tentativas: ' + tentativasMagicoDificil++
    }
     if (numero > sorteio) {
        document.getElementById("inpNumeroMagicoDificil").focus()
        document.getElementById('divPainel').innerHTML = 'O número sorteado é menor' + '<br>' + 
        'Quantidade de tentativas: ' + tentativasMagicoDificil++
    }
     if (numero == sorteio) {
        document.getElementById('divPainel').innerHTML = 'Acertou!'+ '<br>' + 
        'Quantidade de tentativas: ' + tentativasMagicoDificil
    }
     if (tentativasMagicoDificil >= 11){
        document.getElementById("inpNumeroMagicoDificil").value = ''
        document.getElementById('divPainel').innerHTML = 'Acabou as chances do nível Difícil, o número era: ' + sorteio

}
}

function tenteDeNovoMagicoDificil(){
    contador = 0
    sorteio = Math.round(Math.random() * 100)
    tentativasMagicoDificil = 1
    document.getElementById('divPainel').innerHTML = 'Pode começar, outro número foi gerado!'
    document.getElementById("inpNumeroMagicoDificil").focus()
    document.getElementById("inpNumeroMagicoDificil").value = ''
}

function Volte(){
    location.reload()
}
