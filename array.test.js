const { encontrarIndicesMaiorMenor } = require("./array.js");

describe("Teste da função de arrays", () => {
  it("Deve encontrar o indice maior ou menor", () => {
    expect(encontrarIndicesMaiorMenor([5, 2, 9, 1, 7])).toEqual({
      indiceMaior: 2,
      indiceMenor: 3,
    });
  });
});
