require('../index')('pm2.json');

test('Loads PM2', () => {
  expect(process.env).toBeDefined();
  expect(process.env).toHaveProperty("PORT", '3333');
  expect(process.env).toHaveProperty("MONGO_DB", 'mongodb://127.0.0.1:27017/db');
});
