const multiplicar = require('./multiplicacion');

test('multiplicar 3 * 4 es igual a 12', () => {
  const resultado = multiplicar(3, 4);
  expect(resultado).toBe(12);
});

test('multiplicar 5 * 7 es igual a 35', () => {
  const resultado = multiplicar(5, 7);
  expect(resultado).toBe(35);
});