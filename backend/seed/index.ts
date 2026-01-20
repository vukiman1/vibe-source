import { AppDataSource } from '../ormconfigs';
import { seedUsers } from './seeders/user.seeder';
import { seedProducts } from './seeders/product.seeder';

async function runSeeds() {
  await AppDataSource.initialize();
  await seedUsers();
  await seedProducts();
  await AppDataSource.destroy();
}

void runSeeds();
