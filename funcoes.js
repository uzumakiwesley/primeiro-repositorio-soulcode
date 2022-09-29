/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

 /**
 * Parâmetros
 * 
 * São valores que passamos para as funções, para que elas utilizem dentro delas
 */

 // passar um valor como parâmetro  para mostra-lo dentro do alert
function cumprimentar(mensagem, repetir = 1) {
   for (let i = 1; i <= repetir; i++) {
    alert(mensagem)
   }
}

function soma(num, num2) {
/**
 * O return serve para enviar o resultaso sa execução daquela função
 */

return num + num2
 }

 function maiorValor(a, b) {
    if (a > b) {
        return a
    } else {
        return b
  }
 }

 let resultado = soma(4, 7)
 console.log(`o valor da variável resultado é: ${resultado}`)
 console.log(maiorValor(5, 10))

 const num1 = parseInt(prompt('informe o primeiro numero'))
 const num2 = parseInt(prompt('informe o segundo numero'))

 alert(`O maior número entre esses números é ${maiorValor(num1, num2)}`)

//cumprimentar('olá, mundo')
/* cumprimentar('Eu gosto muito do Javascript')
cumprimentar('Js sola C#') */
