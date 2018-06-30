require('../index')();

test('Loads', () => {
  expect(process.env).toBeDefined();
  expect(process.env).toHaveProperty("BOOL", 'true');
  expect(process.env).toHaveProperty("STRING", 'Hello World');
  expect(process.env).toHaveProperty("NUMBER", '42');
});

