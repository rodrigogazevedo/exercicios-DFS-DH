function alarme1() {
  return 'Hora de acordar são 08:00';
}

function alarme2() {
  return 'Está perto da sua hora de acordar são 7:50';
}
setTimeout(function () {
  console.log(alarme1());
}, 0);
console.log(alarme2());
