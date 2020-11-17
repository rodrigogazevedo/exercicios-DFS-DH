let pessoa = {
  nome: 'Rodrigo',
  altura: 1.72,
  peso: 85,
};

const { nome, altura, peso: weight } = pessoa;

console.log(weight);

let listaCompras = ['pão', 'leite', 'açúcar'];

const [item1, item2, item3] = listaCompras;

console.log(item2);
