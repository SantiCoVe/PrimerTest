const calcularAreaRectangulo = require('./area');

test('calcular área de un rectángulo 5x3 es igual a 15', () => {
  const resultado = calcularAreaRectangulo(5, 3);
  expect(resultado).toBe(15);
});

test('calcular área de un rectángulo 4x6 es igual a 24', () => {
  const resultado = calcularAreaRectangulo(4, 6);
  expect(resultado).toBe(24);
});