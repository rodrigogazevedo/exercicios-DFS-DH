// const somar = (numeroA, numeroB) => numeroA + numeroB;

// const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

// console.log(calculadora(10, 20, (numeroA, numeroB) => numeroA - numeroB));

// function nomeCompleto(nome, sobrenome) {
//   return nome + ' ' + sobrenome;
// }

// function saudar(nome, sobrenome, callback) {
//   return 'Olá ' + callback(nome, sobrenome) + '!';
// }

// console.log(saudar('João', 'Neves', nomeCompleto));

function iniciais(nome, sobrenome) {
  return nome[0] + ' ' + sobrenome[0];
}

function saudar(nome, sobrenome, callback) {
  return 'Olá ' + callback(nome, sobrenome) + '!';
}

console.log(saudar('João', 'Neves', iniciais));

function adicionarHttp(url) {
  return 'http://' + url;
}

function processar(lista, callback) {
  let novaLista = [];
  for (let i = 0; i < lista.length; i++) {
    novaLista.push(callback(lista[i]));
  }
  return novaLista;
}

processar(['www.google.com', 'www.yahoo.com'], adicionarHttp);
