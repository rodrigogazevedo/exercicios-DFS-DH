const express = require('express');
const rotasProdutos = require('./rotas/rotasProduto');
let app = express();

app.get('/', (req, res) => res.send('Olá mundo!'));
app.get('/contatos', (req, res) => res.send({ nome: 'Rodrigo', idade: 29 }));
// app.get('/produtos/:id?', (req, res) => {
//   let { id } = req.params;
//   res.send('Eu tenho um produto com o id: ' + id);
// });
app.use('/produtos', rotasProdutos);
//criando um servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
