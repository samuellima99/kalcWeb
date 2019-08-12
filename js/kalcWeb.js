
//funçõa para capturar valor

function capturaValor(valor) {
    exibirNaTela(valor)
}

//função de mostrar na tela

function exibirNaTela(valor) {
    const tela = document.querySelector(".screen")
    tela.innerText += valor
}

//função captura operador

function capturaOperador(operador) {
    exibirNaTela(operador)
}

//função de mostrar o operador na tela

function exibirOperador(operador) {
    const tela = document.querySelector(".screen")
    tela.innerText += operador
}

//função de limpar a tela

function limpaTela(params) {
    const clear = document.querySelector(".screen")
    clear.innerText = '0'
}




