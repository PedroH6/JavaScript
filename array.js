const encontrarIndicesMaiorMenor = (arr) => {
  if (arr.length === 0) {
    return "Array vazio!";
  }

  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < arr.length; i++) {
    // Se o valor no índice atual for maior que o valor no índice do maior, atualiza o índice
    if (arr[i] > arr[indiceMaior]) {
      indiceMaior = i;
    }

    // Se o valor no índice atual for menor que o valor no índice do menor, atualiza o índice
    if (arr[i] < arr[indiceMenor]) {
      indiceMenor = i;
    }
  }

  return {
    indiceMaior: indiceMaior,
    indiceMenor: indiceMenor
  };
}


const numeros = [5, 2, 9, 1, 7];
const resultado = encontrarIndicesMaiorMenor(numeros);
console.log(`Índice do maior valor: ${resultado.indiceMaior}`); // Saída: 2 (valor 9)
console.log(`Índice do menor valor: ${resultado.indiceMenor}`); // Saída: 3 (valor 1)


module.exports = {encontrarIndicesMaiorMenor}