let frutas = ['maça', 'banana', 'uva'];

let frutasDois = ['laranja', 'abacate', 'goiaba'];

let listaCompleta = [...frutas, ...frutasDois];

let pessoa = {
  nome: 'Rodrigo',
  idade: 29,
};

let infoPessoal = {
  tel: '1234567899',
  rg: 1245678931,
  ...pessoa,
};

let pessoaCompleta = {
  endereco: 'Ruas dos bobos',
  ...infoPessoal,
};

// console.log(pessoaCompleta);

function letras(...paramns) {
  // console.log(paramns);
  //console.log(paramns[1]);
}

letras('a', 'b', 'c');

function myFuncao(param1, param2, ...outros) {
  return outros;
}

console.log(myFuncao('a', 'b', 'c', 'd', 'e'));

function somar(...numeros) {
  return numeros.reduce((pilha, num) => (pilha += num));
}

console.log(somar(1, 4));
console.log(somar(13, 6, 8, 12, 23, 37));
