//modo declarativo
//let numero = 32;

function somar(a, b) {
  //código
  let numero = 32;
  console.log('Estou somando...');
  console.log(numero);
  return a + b;
}

let resultadoSoma = somar(1, 2);
console.log(resultadoSoma);

//modo expressão

const multiplicar = function (a, b) {
  //codigo
  console.log('Estou multiplicando....');
  return a * b;
};

let resultadoMultiplicar = multiplicar(2, 10);
console.log(resultadoMultiplicar);

function ePar(num) {
  if (num % 2 == 0) return true;
  else return false;
}

console.log(ePar(2));
