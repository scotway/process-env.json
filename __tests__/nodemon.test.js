require('../index')('nodemon.json');

test('Loads', () => {
  expect(process.env).toBeDefined();
  expect(process.env).toHaveProperty("STRING", 'FROM NODEMON');
});
