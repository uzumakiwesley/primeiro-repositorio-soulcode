/**
 * Objeto é uma estrutura que permite organizar dados na forma de chave-valor
 */

 let end = {
    rua: 'Rua1',
    numero: 456,
    estado: 'SP',
    complemento: 'sem complemento',
    cep: '13000-000'
}

let pessoa = {
    nome: 'Joana',
    idade: 23,
    cpf: '123.123.123.12',
    altura: 156,
    solteiro: true,
    habilidades: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
    endereco: {...end},
    cumprimentar(){
        /**
         * quando eu desejo refenciar o mesmo objeto dentro dele mesm, eu utilizo a palavra chave 'this'
         */
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}
   
/*console.log(end)
console.log(pessoa.habilidades[2])*/
pessoa.cumprimentar()
pessoa.nome = 'Pablo Escobar'
pessoa.cumprimentar()
pessoa.habilidades.push('Angular')
console.log(pessoa.habilidades)
console.log(pessoa['cpf'])
console.log(end.rua)
console.log(pessoa.endereco.rua)

pessoa.endereco.rua = 'rua2'

console.log(pessoa.endereco.rua)
console.log(end.rua)