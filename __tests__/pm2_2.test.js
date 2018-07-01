require('../index')('pm2.json', 2);

test('Loads PM2 3 APP', () => {
  expect(process.env).toBeDefined();
  expect(process.env).toHaveProperty("PORT", '3555');
  expect(process.env).toHaveProperty("MONGO_DB", 'mongodb://127.0.0.1:27017/base');
});
