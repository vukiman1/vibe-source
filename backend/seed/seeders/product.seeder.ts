import { faker } from '@faker-js/faker';
import { AppDataSource } from '../../ormconfigs';
import { ProductsEntity } from '../../src/api/products/entities/products.entities';
import { ProductType } from '@app/enum';
import { DeepPartial } from 'typeorm';

export async function seedProducts() {
  const productRepository = AppDataSource.getRepository(ProductsEntity);

  await productRepository.query('TRUNCATE TABLE "products" CASCADE');

  const products = Array.from({ length: 10 }, () => ({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.number.int({ min: 1, max: 20 }) * 250000,
    type: faker.helpers.arrayElement(Object.values(ProductType)),
  }));

  const savedProducts = await productRepository.save(
    products as DeepPartial<ProductsEntity>[],
  );

  console.table(savedProducts.map((p) => ({ id: p.id, title: p.title })));

  return savedProducts;
}
