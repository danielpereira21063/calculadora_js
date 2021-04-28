let operador = ('');
let resultado = 0;
let valor = 0;
let operacao = [];
const btnDividir = document.getElementsByClassName('operador')[0];
const btnMultiplicar = document.getElementsByClassName('operador')[1];
const btnSubtrair = document.getElementsByClassName('operador')[2];
const btnSomae = document.getElementsByClassName('operador')[3];


function adicionar(numero_digitado) {
    valor = document.getElementById("visor").value += numero_digitado;
    console.log(valor);
}

function limpar() {
    document.getElementById("visor").value = '';
}

function prepararOperacao() {
    operacao.push(valor);
    console.log('ok')
}


calculadora = {
    calcular(operacao, operador) {
        switch(operador) {
            case '+':
                console.log(operacao, operador);
                //retornar a soma
            break;

            case '-':
            break;

            case '/':
            break;

            case 'x':
            break;
        }
    },

    somar(operacao) {
        
    }
}

// ADICIONAR A BIBLIOTECA DO JQUERY