//Definido os operadores

let operadores = ["+", "-", "x", "÷", "."];

//Definindo variaveis auxiliares

let valorAtual = 0
let valorPassado = 0
let resultado = 0
let status = false
let operador


// Captura o estado da tela

const tela = document.querySelector(".screen")

//função para capturar valores

function capturaValor(valor) {
    exibirNoDisplay(valor)
}

//função para capturar os operadores

function capturaOperador(operacao) {

    operador = operacao

    valorPassado = resultado
    valorAtual = tela.innerText

    switch (operador) {
        case operadores[0]:
            tela.innerText = ""
            resultado = soma(valorPassado, valorAtual)
            exibirNoDisplay(resultado)
            status = true
            break;
        case operadores[1]:
            tela.innerText = ""
            if (valorPassado == '0') {
                resultado = subtracao(valorAtual, valorPassado)
                exibirNoDisplay(resultado)
                status = true
            } else {
                resultado = subtracao(valorPassado, valorAtual)
                exibirNoDisplay(resultado)
                status = true
            }
            break;
        case operadores[2]:
            tela.innerText = ""
            if (valorPassado == '0') {
                resultado = multiplicacao(valorAtual, 1)
                exibirNoDisplay(resultado)
                status = true
            } else {
                resultado = multiplicacao(valorAtual, valorPassado)
                exibirNoDisplay(resultado)
                status = true
            }
            break;
        case operadores[3]:
            tela.innerText = ""
            if (valorPassado == '0' || valorPassado <= '0') {
                resultado = divisao(valorAtual, 1)
                exibirNoDisplay(resultado)
                status = true
            } else {
                resultado = divisao(valorPassado, valorAtual)
                exibirNoDisplay(resultado)
                status = true
            }
            break;
    }
}

//função igual  

function igual(params) {
    capturaOperador(operador)
    if (operador != "") {
        operador = ""
    }
}

//função para exibir no display

function exibirNoDisplay(valor) {
    if (status) {
        status = false;
        tela.innerText = ""
        tela.innerText = valor
    } else {
        if (valor == operadores[4] && tela.innerText == "0") {
            tela.innerText = "0"
            tela.innerText += valor
        } else if(tela.innerText == "0") {
            tela.innerText = ""
            tela.innerText += valor
        } else {
            tela.innerText += valor
        }
    }
}

//função de limpar a tela

function limpaTela() {
    tela.innerText = "0"
    valorPassado = 0
    status = false
    valorAtual = 0
    resultado = 0
    operador = 0
}

//funções de soma, divisão, multiplicação e subtração

function soma(valor01, valor02) {
    return Number(valor01) + Number(valor02)
}

function subtracao(valor01, valor02) {
    return Number(valor01) - Number(valor02)
}

function multiplicacao(valor01, valor02) {
    return Number(valor01) * Number(valor02)
}

function divisao(valor01, valor02) {
    return Number(valor01) / Number(valor02)
}



