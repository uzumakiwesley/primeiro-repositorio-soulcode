/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes ou mais, preço normal de etiqueta mais juros de 10%
*/

/**
 * --> Métodos de  pagamento
 *  * Em dinheiro
 *  * Em cheque
 *  * No cartão
 */

/**
 * Estrututas de repetição
 * whilw --> enquanto
 */

// recebendo o preço do produto e transformando o valor para decimal

let precoProduto = parseFloat(prompt('Qual o preço do produto'))

while (isNaN(precoProduto) == true || precoProduto <= 0) {
   alert('O preço digitado é invalido. Por favor informe o preço apenas com números acima de 0, sem caractéres especiais  (letra, símbolo)')
   precoProduto = parseFloat(prompt('qual o preço do produto'))
}

mensagem =
 `
Informe o método de pagamento: 
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento com cartão
`

let metodoDePagamento = parseInt (prompt(mensagem))

while (metodoDePagamento < 1 || metodoDePagamento > 3) {
    alert(`Digite uma opção válida de parcelas entre 1 e 3`)
    metodoDePagamento = parseInt(prompt(mensagem))
}

console.log(precoProduto)
console.log(metodoDePagamento)


/**
 * Se o método de pagamento for 1 ou 2 significa que a pessoa terá um desconto de 10%
 */

if (metodoDePagamento == 1 || metodoDePagamento == 2){ 

 const precoFinal = precoProduto * 0.9
 alert(`O preço final de pagamento será ${precoFinal} Reais`)   
} else if (metodoDePagamento == 3) {

    /**
     * 1 parcela = 15% de desconto
     * 2 parcelas =  preço do produto
     * 3 ou mais parcelas = 10% de acrescimo
     */

    const parcelas = parseInt(prompt('Informe a quantidade de parcelas'))

    while (metodoDePagamento > 3){
        alert(`Forma de pagamento inválida ecolha parcelas entre 1, 2 ou 3`) 
        metodoDePagamento = parseInt(prompt('Informe a quantidade de parcelas'))

    }

    if (parcelas == 1) {
        const precoFinal = precoProduto * 0.85
        alert(`O preço final de pagamento será ${precoFinal.toFixed} Reais`)   
    } else if (parcelas == 2) {
    alert(`O preço final do pagamento é ${precoProduto} Reais`)
    } else  { 
        const precoFinal = precoProduto * 1.1
        alert(`O preço do pagamento será ${precoFinal.toFixed(2)} Reais`)
    }

}
