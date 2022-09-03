let numero = [] //Vetor do número que será comparado
let sorteio = [] //Vetor onde será guardado o número sorteado
let tentativasMagicoFacil = 1
let tentativasMagicoMedio = 1
let tentativasMagicoDificil = 1


//Ir para tela do modo fácil
function facilMagico(){
    document.getElementById("divMagicoModoFacil").style.display = 'inline'
    document.getElementById("divPainel").style.display = 'inline'
    document.getElementById("divVoltar").style.display = 'inline'
    document.getElementById("divJogos").style.display = 'none'
    document.getElementById("inpNumeroMagicoFacil").focus()
    sorteio = Math.round(Math.random() * 10)
}

//Botão de tentativa do modo fácil
function tenteMagicoFacil(){
    //Pega o número do input que será comparado
    numero = document.getElementById("inpNumeroMagicoFacil").value
    
    //Compara com o vetor do sorteio
    if (numero < sorteio) {
        document.getElementById("inpNumeroMagicoFacil").focus()
        document.getElementById('divPainel').innerHTML = `O número sorteado é maior ${'<br>'}
        Quantidade de tentativas:  ${tentativasMagicoFacil++}`
    }
        if (numero > sorteio) {
            document.getElementById("inpNumeroMagicoFacil").focus()
            document.getElementById('divPainel').innerHTML = `O número sorteado é menor ${'<br>'}
            Quantidade de tentativas:  ${tentativasMagicoFacil++}`
        }
        if (numero == sorteio) {
            document.getElementById("inpNumeroMagicoFacil").focus()
            document.getElementById('botaoMagicoFacil').disabled = true
            document.getElementById('divPainel').innerHTML = `Acertou! ${'<br>'}
            Quantidade de tentativas:  ${tentativasMagicoFacil}` 
            }

    if (tentativasMagicoFacil >= 4){
        document.getElementById("inpNumeroMagicoFacil").value = ''
        document.getElementById('divPainel').innerHTML = `Acabou as chances do nível Fácil, o número era: ${sorteio}`      
     } 
    }
    // Botão de reiniciar o jogo do modo fácil
    function tenteDeNovoMagicoFacil(){   
        sorteio = Math.round(Math.random() * 10)
        tentativasMagicoFacil = 1
        document.getElementById('divPainel').innerHTML = 'Pode começar, outro número foi gerado!'
        document.getElementById("inpNumeroMagicoFacil").focus()
        document.getElementById("inpNumeroMagicoFacil").value = ''
    }
    //Ir para tela do modo médio
    function medioMagico() {
    document.getElementById("divMagicoModoMedio").style.display = 'inline'
    document.getElementById("divPainel").style.display = 'inline'
    document.getElementById("divVoltar").style.display = 'inline'
    document.getElementById("divJogos").style.display = 'none'
    document.getElementById("inpNumeroMagicoMedio").focus()
    sorteio = Math.round(Math.random() * 50)
}

//Botão de tentativa do modo médio
function tenteMagicoMedio(){
     //Pega o número do input que será comparado
    numero = document.getElementById("inpNumeroMagicoMedio").value
    
    //Compara com o vetor do sorteio
    if (numero < sorteio) {
        document.getElementById("inpNumeroMagicoMedio").focus()
        document.getElementById('divPainel').innerHTML = `O número sorteado é maior ${'<br>'}
        Quantidade de tentativas:  ${tentativasMagicoMedio++}`
}
        if (numero > sorteio) {
        document.getElementById("inpNumeroMagicoMedio").focus()
        document.getElementById('divPainel').innerHTML = `O número sorteado é menor ${'<br>'}
        Quantidade de tentativas:  ${tentativasMagicoMedio++}`
}
     if (numero == sorteio) {
        document.getElementById("inpNumeroMagicoMedio").focus()
        document.getElementById('divPainel').innerHTML = `Acertou! ${'<br>'}
        Quantidade de tentativas:  ${tentativasMagicoMedio}`
        }
     if (tentativasMagicoMedio >= 6){
        document.getElementById("inpNumeroMagicoMedio").value = ''
        document.getElementById('divPainel').innerHTML = `Acabou as chances do nível Médio, o número era: ${sorteio}`  
}
}
   // Botão de reiniciar o jogo do modo médio
function tenteDeNovoMagicoMedio(){
    sorteio = Math.round(Math.random() * 50)
    tentativasMagicoMedio = 1
    document.getElementById('divPainel').innerHTML = 'Pode começar, outro número foi gerado!'
    document.getElementById("inpNumeroMagicoMedio").focus()
    document.getElementById("inpNumeroMagicoMedio").value = ''
}

//Ir para a tela do modo Difícil
function dificilMagico() {
    document.getElementById("divMagicoModoDificil").style.display = 'inline'
    document.getElementById("divPainel").style.display = 'inline'
    document.getElementById("divVoltar").style.display = 'inline'
    document.getElementById("divJogos").style.display = 'none'
    document.getElementById("inpNumeroMagicoDificil").focus()

    sorteio = Math.round(Math.random() * 100)
}
//Botão de tentativa do modo difícil
function tenteMagicoDificil(){
    //Pega o número do input que será comparado
    numero = document.getElementById("inpNumeroMagicoDificil").value

    //Compara com o vetor do sorteio
    if (numero < sorteio) {
        document.getElementById("inpNumeroMagicoDificil").focus()
        document.getElementById('divPainel').innerHTML = `O número sorteado é maior ${'<br>'}
        Quantidade de tentativas:  ${tentativasMagicoDificil++}`
    }
     if (numero > sorteio) {
        document.getElementById("inpNumeroMagicoDificil").focus()
        document.getElementById('divPainel').innerHTML = `O número sorteado é menor ${'<br>'}
        Quantidade de tentativas:  ${tentativasMagicoDificil++}`
    }
     if (numero == sorteio) {
        document.getElementById('divPainel').innerHTML = `Acertou! ${'<br>'}
        Quantidade de tentativas:  ${tentativasMagicoDificil}`
    }
     if (tentativasMagicoDificil >= 11){
        document.getElementById("inpNumeroMagicoDificil").value = ''
        document.getElementById('divPainel').innerHTML = `Acabou as chances do nível Médio, o número era: ${sorteio}`  

}
}
 // Botão de reiniciar o jogo do modo Dificl
function tenteDeNovoMagicoDificil(){
    sorteio = Math.round(Math.random() * 100)
    tentativasMagicoDificil = 1
    document.getElementById('divPainel').innerHTML = 'Pode começar, outro número foi gerado!'
    document.getElementById("inpNumeroMagicoDificil").focus()
    document.getElementById("inpNumeroMagicoDificil").value = ''
}

//Recarrega a página
function Volte(){
    location.reload()
}
