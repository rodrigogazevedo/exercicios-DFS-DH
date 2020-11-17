let pessoa = {
  nome: 'Rodrigo',
  idade: 29,
  altura: 1.8,
};

let listaCompras = ['pão', 'presunto', 'queijo'];

let json = JSON.stringify(listaCompras);

// let objetoDeNovo = JSON.parse(json);

// console.log(objetoDeNovo.nome);
let arrayDeNovo = JSON.parse(json);
console.log(arrayDeNovo);
