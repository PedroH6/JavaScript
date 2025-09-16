function calcularMDC(a, b) {

  while (b !== 0) {
    
    const temp = b;
  
    b = a % b;
   
    a = temp;
  }
 
  return a;
}

console.log(calcularMDC(12, 18)); // Saída: 6
console.log(calcularMDC(48, 20)); // Saída: 4