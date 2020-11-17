let numeroPares = [2, 4, 6, 8, 10];

//map
let numerosParesDobro = numeroPares.map(function (valor) {
  return valor * 2;
});

console.log(numerosParesDobro);

//filter
let numerosFiltrados = numeroPares.filter(function (valor) {
  return valor > 10;
});

console.log(numerosFiltrados);

//reduce
let somaPares = numeroPares.reduce(function (acum, valor) {
  return acum + valor;
});

console.log(somaPares);

//forEach
numeroPares.forEach(function (valor, indice) {
  console.log('O índice ' + indice + ' tem o valor: ' + valor);
});
