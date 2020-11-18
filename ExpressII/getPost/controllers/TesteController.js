// Exercício 1
// const celulares = [
//   {
//     nome: 'Motorola Moto E6 Plus',
//     preco: 14999,
//   },
//   {
//     nome: 'Motorola Moto G7',
//     preco: 19999,
//   },
//   {
//     nome: 'Alcatel 5033A',
//     preco: 6999,
//   },
//   {
//     nome: 'Samsung Galaxy A50',
//     preco: 33499,
//   },
// ];

// let TesteController = {
//   index: (req, res) => {
//     let max = req.query.max;
//     let listaCelulares = celulares.filter((valor) => {
//       return valor.preco < max;
//     });
//     res.send(listaCelulares);
//   },
// };

// Exercício 2
// let produto = {
//   nome: null,
//   preco: null,
// };

// let TesteController = {
//   index: (req, res) => {
//     produto.nome = req.body.nome;
//     produto.preco = req.body.preco;
//     res.send(produto);
//   },
// };

// Exercício 3
// let filmes = [
//   {
//     id: 1,
//     titulo: 'Spider-Man: Longe de casa',
//     duracao: 129,
//     genero: 'Aventura',
//   },
//   {
//     id: 2,
//     titulo: 'Toy Story 4',
//     duracao: 100,
//     genero: 'Animacao',
//   },
//   {
//     id: 3,
//     titulo: 'X-Men: Fênix Negra',
//     duracao: 113,
//     genero: 'Acao',
//   },
// ];

let TesteController = {
  index: (req, res) => {
    // filmes.forEach((filme, index) => {
    //   if (filme.id == req.params.id) {
    //     let { tituloFilme, duracaoFilme, generoFilme } = req.body;
    //     filme.titulo = tituloFilme;
    //     filme.duracao = duracaoFilme;
    //     filme.genero = generoFilme;
    //   }
    //   filmes[index] = filme;
    // });
    // res.send(filmes);
  },
};

module.exports = TesteController;
