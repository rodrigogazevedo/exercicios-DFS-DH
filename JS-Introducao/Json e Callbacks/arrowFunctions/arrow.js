const somar = (numeroA, numeroB) => {
  console.log('primeiro numero: ', numeroA);
  console.log('segundo numero: ', numeroB);
  return numeroA + numeroB;
};

console.log(somar(20, 30));

let horaAtual = () => {
  let data = new Date();
  return data.getHours() + ':' + data.getMinutes();
};

console.log(horaAtual());
