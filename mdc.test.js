const { calcularMDC } = require("./mdc.js");

describe("Teste da função calcularMDC", () => {
  it("Deve calcular o MDC corretamente", () => {
    expect(calcularMDC(12, 18)).toBe(6);
    expect(calcularMDC(48, 20)).toBe(4);
  });
});
