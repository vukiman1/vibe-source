# AI Agent Documentation - My App Backend

## 📋 Tổng quan dự án

Đây là một ứng dụng backend được xây dựng bằng NestJS với TypeScript, hỗ trợ:

- **Authentication & Authorization**: JWT với Argon2 hashing
- **Real-time Chat**: Socket.IO WebSocket
- **Product Management**: CRUD operations
- **User Management**: User profiles và permissions
- **Database**: PostgreSQL với TypeORM
- **API Documentation**: Swagger/OpenAPI

## 🏗️ Kiến trúc và Patterns

### 1. Module Structure

Dự án sử dụng NestJS module pattern với cấu trúc:

```
src/api/{module}/
├── dto/           # Data Transfer Objects
├── entities/      # TypeORM entities
├── {module}.controller.ts
├── {module}.service.ts
└── {module}.module.ts
```

### 2. Shared Libraries (libs/)

- `@app/base`: Base classes và interfaces
  - `base.entity.ts`: Base entity với id, createdAt, updatedAt
  - `base.controller.ts`: Base controller pattern
  - `base.service.ts`: Base service pattern
  - `base.dto.ts`: Base DTO classes
  - `base.swagger.ts`: Swagger base configurations
- `@app/constants`: Application constants
- `@app/crypto`: Cryptography utilities (Argon2)
- `@app/database`: Database configuration và module
- `@app/decorators`: Custom decorators
  - `user.decorator.ts`: @User() decorator để lấy user từ request
- `@app/enum`: Enumerations
  - `role.enum.ts`: User roles (Admin, User, etc.)
  - `product.enum.ts`: Product related enums
  - `chat.enum.ts`: Chat related enums
- `@app/helpers`: Utility functions
  - `paginationToQuery.ts`: Pagination helpers
  - `queryBuilder.ts`: Query builder utilities
  - `setCookieRFToken.ts`: Cookie management cho refresh token
- `@app/jwt`: JWT utilities
  - `jwt.service.ts`: JWT token generation và validation
  - `jwt.payload.ts`: JWT payload interface

### 3. Configuration

- Environment variables được load từ `.env.local`
- Database config trong `config/config.ts`
- TypeORM config trong `ormconfigs.ts`
- Global prefix: `api/v1` (được set trong `main.ts`)
- CORS enabled với credentials support
- Cookie parser được sử dụng cho authentication
- Swagger documentation tại `/docs`

### 4. API Modules hiện tại

- **Auth Module** (`src/api/auth/`)
  - Controllers: `auth.user.controller.ts`, `auth.base.controller.ts`
  - Services: `auth.service.ts`
  - Strategies: JWT, Local authentication
  - DTOs: Login, Register, etc.

- **User Module** (`src/api/user/`)
  - Entity: `UserEntity` với email, password (hashed), role
  - Controller: `user.controller.ts`
  - Service: `user.service.ts`
  - Tests: Unit tests và controller tests

- **Chat Module** (`src/api/chat/`)
  - Gateway: `chat.gateway.ts` (WebSocket)
  - Entities: `ConversationsEntity`, `ConversationsMembersEntity`, `MessageEntity`
  - Services: `conversation.service.ts`
  - Events: `room:join`, `room:leave`, `message:send`, `typing`

- **Products Module** (`src/api/products/`)
  - Entity: `ProductsEntity`
  - Controller: `products.controller.ts`
  - Service: `products.service.ts`

- **Gateway Module** (`src/api/gateway/`)
  - Wrapper module cho WebSocket gateway

## 🗄️ Database Schema

### Entities hiện tại:

1. **User** - Quản lý người dùng
2. **Products** - Quản lý sản phẩm
3. **Conversations** - Phòng chat
4. **ConversationsMembers** - Thành viên phòng chat
5. **Message** - Tin nhắn chat

### Migration Commands:

```bash
# Tạo migration
pnpm run migration:generate --name=MigrationName

# Chạy migration
pnpm run migration:run

# Revert migration
pnpm run migration:revert
```

## 🔐 Authentication & Security

### JWT Implementation

- Sử dụng Argon2 cho password hashing
- JWT tokens với configurable expiration
- Cookie-based authentication
- Custom decorators: `@User()`, `@Roles()`

### Security Best Practices

- Input validation với class-validator
- CORS enabled với credentials
- Environment-based configuration
- Password hashing với Argon2

## 🌐 API Patterns

### Controller Pattern

```typescript
@Controller('api/v1/module')
@ApiTags('Module')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Post()
  @ApiOperation({ summary: 'Create new item' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  async create(@Body() createDto: CreateModuleDto) {
    return this.moduleService.create(createDto);
  }
}
```

### Service Pattern

```typescript
@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleEntity)
    private readonly moduleRepository: Repository<ModuleEntity>,
  ) {}

  async create(createDto: CreateModuleDto): Promise<ModuleEntity> {
    const entity = this.moduleRepository.create(createDto);
    return this.moduleRepository.save(entity);
  }
}
```

### DTO Pattern

```typescript
export class CreateModuleDto {
  @ApiProperty({ description: 'Module name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Module description', required: false })
  @IsString()
  @IsOptional()
  description?: string;
}
```

## 🔌 WebSocket Implementation

### Chat System

- Socket.IO gateway trong `src/api/gateway/`
- Real-time messaging
- Room management
- Typing indicators
- Message persistence

### WebSocket Events:

- `room:join`: Tham gia phòng chat với conversationId
- `room:leave`: Rời phòng chat
- `message:send`: Gửi tin nhắn
- `message:new`: Event nhận tin nhắn mới
- `typing`: Typing indicator (auto timeout sau 1s)

## 📝 Code Standards

### 1. Naming Conventions

- **Files**: kebab-case (user.service.ts)
- **Classes**: PascalCase (UserService)
- **Methods**: camelCase (getUserById)
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces**: PascalCase với prefix I (IUser)

### 2. Import Organization

```typescript
// 1. Node modules
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// 2. Internal modules
import { User } from 'src/api/user/entities/user.entity';

// 3. Relative imports
import { CreateUserDto } from './dto/create-user.dto';
```

### 3. Error Handling

```typescript
try {
  const result = await this.someOperation();
  return result;
} catch (error) {
  throw new BadRequestException('Operation failed');
}
```

### 4. API Documentation

- Sử dụng Swagger decorators
- `@ApiTags()` cho controllers
- `@ApiOperation()` cho methods
- `@ApiResponse()` cho responses
- `@ApiProperty()` cho DTOs

## 🧪 Testing Patterns

### Unit Tests

```typescript
describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });
});
```

### E2E Tests

```typescript
describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
});
```

## 🚀 Development Workflow

### 1. Tạo Module mới

```bash
# Tạo module
nest g module api/module-name

# Tạo controller
nest g controller api/module-name

# Tạo service
nest g service api/module-name

# Tạo entity
nest g class api/module-name/entities/module-name.entity
```

### 2. Tạo Library mới

```bash
nest g library libs/library-name
```

### 3. Database Operations

```bash
# Tạo migration
pnpm run migration:generate --name=CreateTableName

# Chạy migration
pnpm run migration:run

# Seed data
pnpm run seed
```

## 🔧 Environment Configuration

### Required Environment Variables:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=admin
DB_DATABASE=myapp

# Application
PORT=8000
NODE_ENV=local

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

### Configuration Loading:

- `.env.local` cho development
- `.env.production` cho production
- Config được load trong `config/config.ts`

## 📦 Dependencies

### Core Dependencies:

- `@nestjs/*`: NestJS framework
- `typeorm`: Database ORM
- `pg`: PostgreSQL driver
- `argon2`: Password hashing
- `socket.io`: WebSocket
- `class-validator`: Validation
- `class-transformer`: Transformation

### Development Dependencies:

- `@nestjs/testing`: Testing utilities
- `jest`: Testing framework
- `eslint`: Linting
- `prettier`: Code formatting
- `@faker-js/faker`: Test data generation

## 🎯 Common Tasks cho AI

### 1. Tạo CRUD Module

1. Tạo entity với TypeORM decorators
2. Tạo DTOs (Create, Update, Response)
3. Tạo service với repository injection
4. Tạo controller với Swagger documentation
5. Tạo module và import vào AppModule
6. Tạo migration nếu cần

### 2. Implement Authentication

1. Sử dụng existing JWT library
2. Implement guards cho protected routes
3. Sử dụng custom decorators (@User, @Roles)
4. Hash passwords với Argon2

### 3. Add WebSocket Features

1. Extend existing gateway
2. Implement event handlers
3. Add room management
4. Persist messages to database

### 4. Database Operations

1. Tạo entity với proper relationships
2. Generate migration
3. Update ormconfigs.ts
4. Test với seed data

## 🚨 Common Issues & Solutions

### 1. Import Path Issues

- Sử dụng absolute paths từ src/
- Check tsconfig.json paths mapping
- Verify libs exports trong index.ts

### 2. Database Connection

- Check environment variables
- Verify PostgreSQL is running
- Check ormconfigs.ts configuration

### 3. Authentication Issues

- Verify JWT_SECRET is set
- Check token expiration
- Validate cookie settings

### 4. WebSocket Connection

- Check CORS settings
- Verify gateway is properly imported
- Check client connection URL

## 📚 Resources

### Documentation:

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [Socket.IO Documentation](https://socket.io/docs/)

### Code Examples:

- Check existing modules trong `src/api/`
- Reference libs trong `libs/`
- Check test files cho patterns

---

**Lưu ý**: Khi implement code mới, luôn tuân theo existing patterns và conventions. Sử dụng existing libraries và utilities khi có thể. Test thoroughly và document APIs với Swagger.
