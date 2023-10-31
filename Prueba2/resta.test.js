const restar = require('./resta');
  
test('restar 7 - 3 es igual a 4', () => {
    const resultado = restar(7, 3);
        expect(resultado).toBe(4);
});
  
test('restar 10 - 5 es igual a 5', () => {
    const resultado = restar(10, 5);
        expect(resultado).toBe(5);
});