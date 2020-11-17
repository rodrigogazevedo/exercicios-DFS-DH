//lenght
let texto = 'Oi eu sou o rodrigo';
console.log(texto.length);

//indexOf
console.log(texto.indexOf('joao'));

//slice

let palavra = texto.slice(0, 3);
console.log(palavra);
console.log(texto);

//trim

console.log(texto.trim());

//split

console.log(texto.split('r'));

//replace

let textoNovo = texto.replace('rodrigo', 'joão');
console.log(textoNovo);

let nome = 'Olá, sou Carlos!';

let nomeUsuario = nome.slice(9, 15);
console.log(nomeUsuario);
