let contador = 0;

// do {
//   console.log('Estou dentro de um while');
//   contador++;
// } while (contador > 10);

while (contador > 10) {
  console.log('Estou dentro de um while');
  contador++;
}

function encontreOCinco(array) {
  let i = 0;
  do {
    if (array[i] == 5) {
      console.log('Encontramos um 5!');
      break;
    }
    console.log(array[i]);
    i++;
  } while (i < array.length);
}

encontreOCinco([1, 2, 3, 4, 5, 6]);
