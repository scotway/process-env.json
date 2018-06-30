require('../index')('./process-env.json');

test('Loads', () => {
  expect(process.env).toBeDefined();
  expect(process.env).toHaveProperty("PROCESS", 'ENV');
});

