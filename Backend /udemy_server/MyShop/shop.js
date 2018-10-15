const faker = require('faker');

for (let i = 0; i < 10; i++) {
  const product = faker.commerce.productName();
  const price = faker.commerce.price();
  console.log(`${product} - $${price}`);
}
