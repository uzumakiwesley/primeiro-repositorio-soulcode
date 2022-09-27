/**
 * Arrays ou vetores são um tipo especial que te permitem armzenar diversos valores em apenas um local
 */

// Criando um Array

// let arr = new Array ()
// let arr2 = new Array(5)

// Dentro de um array eu posso ter vários tipos de dados

/**
 * Posições de um Array
 * 
 *  -> cada posção é reperesentada por um número
 * A primeira posição de um Array é a posição 0
 */

let arr = [10, 15 , 9.8, 'Eu sou um texto dentro de um array', 'Olá, mundo', true, false, false] // mais usada
console.log(arr[6])
arr[6] = 'outro texto'
console.log(arr[6]) // outro texto
console.log(arr[8]) // undefeined
arr[8] = 'agora a posição 8 existe dentro da arr'

const lista =['João', 'Maria', 'Paulo', 'Vitória', 'Augusto', 'Larissa']
console.log(lista)
lista.push('Roberta') // adicionar um valor no final do array
console.log(lista)
lista.unshift('Gustavo') // adicionar um valor ao inicio do array
console.log(lista)
lista.pop() // remove o ultimo nvalor do array
console.log(lista)
lista.shift() // remove o primeiro valor da array
console.log(lista)
console.log(lista.concat('julio'))
console.log(lista)
console.log(lista.join('-> '))
