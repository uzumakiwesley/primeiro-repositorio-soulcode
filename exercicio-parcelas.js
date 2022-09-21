/*
  um posto de gasolina está vendendo combustíveis com a seguinte tabela de descontos:
  Alcool até 25litros, desconto de 2% por litro
  Acima de 25 litros desconto de 4% litro

  gasolina até 25litros desconto de 3%
  acima de 25litros desconto de 5%

  escreva o algoritmo que leia o numero de litros vendidos e o tipo de combustível 
  ( codificado da seguinte forma: A-alcoo,  G-Gasolina), caucule e imprima o valor a ser pago pelo cliente
  sabendo-se que o preço da gasolina é R$2,70 e o preço do alcool é R$1,90

 */

const tipoCombustivel = prompt( `
Tipo de combustivel
Digite A para Alcool 
Digite G para Gasolina
`
  );
  const quantidadeAbastecida = prompt("quantos litros foram abastecidos?");
  
  if (tipoCombustivel == "A") {
    if (quantidadeAbastecida <= 25) {
      const valorAPagar = (quantidadeAbastecida*1.9) * 0.98;
      alert(`o preço final é R$ ${valorAPagar}`);
    } else {
      const valorAPagar = (quantidadeAbastecida*1.9)* 0.96;
      alert(`o preço final é R$ ${valorAPagar}`);
    }
  } else if (tipoCombustivel == "G") {
    if (quantidadeAbastecida <= 25) {
      const valorAPagar = (quantidadeAbastecida*2.7) *0.97;
      alert(`o preço final é R$ ${valorAPagar}`);
    } else  {
      const valorAPagar = (quantidadeAbastecida*2.7)* 0.95;
      alert(`o preço final é R$ ${valorAPagar}`);
    }
  }
