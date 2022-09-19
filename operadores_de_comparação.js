/**
 * Operadores de comparação
 */

// verdadeiro (true) ou falso (false)

// igaldade
const msg = 'Eu sou uma mensagem'
const msg2 = 'Eu sou outra mensagem'

console.log(msg == msg2) // false

const num = 5
const num2 = 5

console.log(num == num2) // true

let a = 78 // number
let b = '78' // string

console.log(a == b) // true independente sse for string ou number

// idênticos
console.log(a === b) // false (3 sinais de = compara o conteudo e o tipo string number)

//diferença
console.log(msg != msg2) // true != (compara a diferença)
console.log(a != b) // false
console.log(a !== b) // true (compara conteudo e tipo)

a = 56
b = 30

let c = 500
let d = 500
console.log(a > b) // true ( se a maior que b)
console.log(a >= b) //true ( a maior ou igual b)

console.log(3 < 7.5) // true
console.log(7.5 < 7.5) // false
console.log(8 <= 8) // true