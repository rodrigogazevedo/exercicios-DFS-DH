let pessoa = ['Rodrigo', 1.72, 'Rodrigo'];
console.log(pessoa);

//push
pessoa.push(29);
console.log(pessoa);
//pop
let excluido = pessoa.pop();
console.log(excluido);

//unshit
pessoa.unshift(29);
console.log(pessoa);

//shift
pessoa.shift();
console.log(pessoa);

//indexOf

console.log(pessoa.indexOf('Rodrigo'));

//lastIndexOf

console.log(pessoa.lastIndexOf('Rodrigo'));

//join

console.log(pessoa.join('/'));
