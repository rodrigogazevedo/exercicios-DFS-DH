for (let i = 0; i <= 4; i++) {
  console.log(i);
}

function naoPareDeContarImparesAte(numero) {
  let quantidadeImpares = 0;

  for (let i = 0; i <= numero; i++) {
    if (i % 2 != 0) {
      quantidadeImpares++;
    }
  }

  return quantidadeImpares;
}

let quantidade = naoPareDeContarImparesAte(20);
console.log(quantidade);
