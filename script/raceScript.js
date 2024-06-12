const corridas = document.querySelectorAll(".corrida .pista")
let indexCorrida = 0
let intervaloTempo = null

window.onload=comecaCalendario()
function comecaCalendario(){
    if(corridas.length >= 0){
        corridas[indexCorrida].classList.add("mostraCorrida")
        intervaloTempo = setInterval(proxCorrida, 40000)
    }
}
function apresentaCorrida(index){
    if(index >= corridas.length){
        indexCorrida = 0
    }
    else if(index < 0){
        indexCorrida = corridas.length - 1
    }

    corridas.forEach(corrida => {
        corrida.classList.remove("mostraCorrida")
    })
    corridas[indexCorrida].classList.add("mostraCorrida")
}

function antCorrida(){
    clearInterval(intervaloTempo)
    indexCorrida--
    apresentaCorrida(indexCorrida)
}

function proxCorrida(){
    indexCorrida++
    apresentaCorrida(indexCorrida)
}
