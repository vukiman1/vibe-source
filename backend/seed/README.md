# Database Seeders

Cấu trúc seed cho project này được tổ chức để dễ dàng mở rộng khi có nhiều bảng liên kết.

## Cấu trúc thư mục

```
seed/
├── index.ts              # Entry point - chạy tất cả seeders
├── seeders/
│   ├── user.seeder.ts    # Seeder cho User
│   ├── post.seeder.ts    # Seeder cho Post (ví dụ)
│   └── ...
└── README.md
```

## Cách sử dụng

### Chạy tất cả seeders
```bash
pnpm seed
```

### Thêm seeder mới

1. Tạo file `seed/seeders/[entity].seeder.ts`:

```typescript
import { faker } from '@faker-js/faker';
import { AppDataSource } from '../../ormconfigs';
import { YourEntity } from '../../src/api/your-entity/entities/your-entity.entity';

export async function seedYourEntity() {
  const repository = AppDataSource.getRepository(YourEntity);

  // Xóa dữ liệu cũ
  await repository.query('TRUNCATE TABLE "your_entity" CASCADE');

  // Tạo dữ liệu
  const data = Array.from({ length: 10 }, () => ({
    // ... faker data
  }));

  const saved = await repository.save(data);
  console.log(`✅ Seeded ${saved.length} your_entities`);

  return saved;
}
```

2. Import và gọi trong `seed/index.ts`:

```typescript
import { seedYourEntity } from './seeders/your-entity.seeder';

async function runSeeds() {
  try {
    await AppDataSource.initialize();
    
    // Thứ tự quan trọng: parent trước, child sau
    await seedUsers();        // Parent
    await seedYourEntity();   // Child (phụ thuộc User)
    
    console.log('✅ All seeds completed successfully');
    await AppDataSource.destroy();
  } catch (error) {
    console.error('❌ Error running seeds:', error);
    process.exit(1);
  }
}
```

## Lưu ý quan trọng

- **Thứ tự seeders**: Luôn seed parent entities trước, sau đó seed child entities
- **TRUNCATE CASCADE**: Xóa dữ liệu cũ cùng với các bảng liên kết
- **Faker**: Sử dụng faker để tạo dữ liệu giả realistic
- **Tái sử dụng**: Các seeder có thể return dữ liệu để seeder khác sử dụng

## Ví dụ: Seeder với liên kết

```typescript
export async function seedPosts(users: User[]) {
  const postRepository = AppDataSource.getRepository(Post);
  await postRepository.query('TRUNCATE TABLE "post" CASCADE');

  const posts = users.flatMap(user =>
    Array.from({ length: 3 }, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(3),
      userId: user.id,
    }))
  );

  const saved = await postRepository.save(posts);
  console.log(`✅ Seeded ${saved.length} posts`);
  return saved;
}
```

Sau đó trong `index.ts`:
```typescript
const users = await seedUsers();
await seedPosts(users);
```

