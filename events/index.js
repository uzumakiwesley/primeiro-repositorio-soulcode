/**
 * Criar uma função responsável por mostrar o alerta na tela
 */
function mostrarAlerta() {
    /**
     * O objeto document é um objeto que faz uma representação do HTML do seu site, dentro do Javascript
     */
    /**
     * A propriedade classList retorna um array com todas as classes  css que um elemento possui
     */
    /**
     * getElementById serve para recuperar um elemento HTML ppelo seu id
     */
    /**
     * classList.add() serve para adicionar novas classes dinamicamente dentro de um elemnto HTML
     */

    const divAlerta = document.getElementById('alerta')
    console.log(divAlerta)
    divAlerta.classList.add('mostrar')
    divAlerta.classList.add('contador')
}

function fecharAlerta() {

    /**
     * classList.remove() remove uma classe dinamicamente de um elemento HTML   
     */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}
 

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')
/**
 * addEventListener é um método que te permite ouvir eventos do HTML pelo Javascript
 */
/**
 * se eu precisar passar uma função como parametro para outra eu asso a referencia dela, ou seja a função sem os parenteses na frente
 */
btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)
        