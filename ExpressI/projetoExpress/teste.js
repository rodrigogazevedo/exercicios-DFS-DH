const express = require('express');
const app = express();

let produto = {
  tipoProduto: null,
  preco: null,
  quantidade: null,
};

const series = ['the big bang theory', 'supernatural', 'mariane'];

app.get('/serie/:id', (req, res) => {
  let { id } = req.params;
  res.send(series[id - 1]);
});

app.listen(3000);
