function somaMultiplos() {
  let soma = 0;

  // O loop vai de 1 até 999 (abaixo de 1000)
  for (let i = 1; i < 1000; i++) {
    // Verifica se o número é múltiplo de 5 ou de 7
    if (i % 5 === 0 || i % 7 === 0) {
      soma += i;
    }
  }

  return soma;
}

console.log(somaMultiplos()); // Saída: 156361