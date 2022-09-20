// delimitação de strings

const aspasSimples = 'Olá, mundo'
console.log(aspasSimples)

const aspasDuplas = "Hello, world" 
console.log(aspasDuplas)

// caracteres de escapa \n quebra linha

const aspasDuplasQuebra = "Hello,  \nworld" 
console.log(aspasDuplasQuebra)

const textoComCrase = `Olá, eu sou o Javascript. Eu sou melho que o Python` // com crase o js execulta exatamente como escrito não precisa utilizar tags de quebra
console.log(textoComCrase)

// métodos das strings

const texto = 'O Javascript foi criado alguns anos após o python. No entanto, o Javascript é bem mais bacana.'

console.log(texto)
console.log(texto.toUpperCase()) // UpperCase todas maiusculas
console.log(texto.toLowerCase()) // LowerCase todas minusculas
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens.'))
//console.log(texto[2])
console.log(texto.substring(2, 12)) //imprime a partir da posição da string solicitada no caso 2 ( quando for final é a posção mais 1)
// case sensitive
console.log(texto.replace('Javascript', 'rust')) // substitui a primeira ocorrência da pesquisa
console.log(texto.replaceAll('Javascript', 'kotlin'))
console.log(texto.replace(/Javascript/g, 'php')) // g procura globalmente e gi egnora se estiver maiuscula ou min altera as duas situações
console.log(texto.replace(/javascript/gi, 'php'))

const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>'))
console.log(html.startsWith('batata'))

console.log(html.endsWith('</body>'))

const mensagem = '               olá mundo                 '
console.log(mensagem)
console.log(mensagem.trim())

let senha = 'sonic'

console.log(senha.length)
console.log(senha.length >=8)


