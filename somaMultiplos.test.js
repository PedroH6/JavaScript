const { somaMultiplos } = require("./somaMultiplos.js");

describe("Teste da função somaMultiplos", () => {
  it("Deve retornar a soma correta dos múltiplos de 5 ou 7 abaixo de 1000", () => {
    expect(somaMultiplos()).toBe(156361);
  });
});
