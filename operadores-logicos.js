/**
 * Operadores Lógicos
 */

// E

// v -> verdadeiro
// f -> falso

/**
 * V V -> V
 * F V -> F
 * V F -> F
 * F F -> F
 */

// média precisa ser maior ou igual 7 E preciso ter no mínimo 80% de presença

const media = (7 + 10 + 10) / 3
const presenca = 0.95

console.log(media >= 7 && presenca >= 0.8) // && -> operador lógico 'E' --> resutado true

// operador Ou

/**
 * V V -> V
 * F V -> V
 * V F -> V
 * F F -> F
 */

console.log(4 > 7 || 3 < 2) // '||' -> operador lógico Ou -->resultado false
console.log(5 > 3.5 || 7 > 8) // True

const estado = 'CE'

console.log(estado == 'SP' || estado == 'MG')

// Operador Não

/**
 * NOT V -> F
 * NOT F -> V
 */

const resultado = 5 < 3 // false

console.log(!resultado) // ! operador lógico  NOT true  --> resultado true 
console.log(!true)
console.log(!false)

