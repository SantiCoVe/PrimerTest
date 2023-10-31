const dividir = require('./division');

test('dividir 10 / 2 es igual a 5', () => {
  const resultado = dividir(10, 2);
  expect(resultado).toBe(5);
});

test('dividir 8 / 2 es igual a 4', () => {
  const resultado = dividir(8, 2);
  expect(resultado).toBe(4);
});

test('dividir por cero lanza un error', () => {
  expect(() => dividir(10, 0)).toThrow('No se puede dividir por cero');
});