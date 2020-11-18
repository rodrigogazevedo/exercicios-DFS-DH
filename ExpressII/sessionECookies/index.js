// const fs = require('fs');
// const path = require('path');

// let caminhoArquivo = path.join('prova.txt');

// //Método para escrever em um arquivo
// // fs.appendFileSync(caminhoArquivo, 'Prova final!');

// // Método para ler um arquivo
// let conteudo = fs.readFileSync(caminhoArquivo, { encoding: 'utf-8' });

// console.log(conteudo);

const bcrypt = require('bcrypt');

let hash = bcrypt.hashSync('1234', 10);

console.log(bcrypt.compareSync('1234', hash));
