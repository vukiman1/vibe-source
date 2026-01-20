# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a NestJS-based backend application built with TypeScript, featuring authentication, real-time chat, product management, and user management. The project uses a monorepo structure with shared libraries, PostgreSQL database with TypeORM, and Socket.IO for WebSocket communication.

## Common Development Commands

### Development & Building
```bash
# Start development server with hot reload
pnpm run start:dev
# or simply
pnpm run dev

# Build the application
pnpm run build

# Start production server
pnpm run start:prod

# Start in debug mode
pnpm run start:debug
```

### Code Quality
```bash
# Run ESLint with auto-fix
pnpm run lint

# Format code with Prettier
pnpm run format
```

### Testing
```bash
# Run unit tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run tests with coverage
pnpm run test:cov

# Run E2E tests
pnpm run test:e2e

# Debug tests
pnpm run test:debug
```

### Database Operations
```bash
# Run pending migrations
pnpm run migration:run

# Generate new migration (use --name flag)
pnpm run migration:generate --name=CreateUserTable

# Create empty migration file
pnpm run migration:create --name=InitialMigration

# Revert last migration
pnpm run migration:revert

# Seed database with initial data
pnpm run seed
```

### NestJS CLI Commands
```bash
# Generate new module
nest g module api/<module-name>

# Generate controller
nest g controller api/<controller-name>

# Generate service
nest g service api/<service-name>

# Generate shared library
nest g library libs/<library-name>
```

## Architecture Overview

### Module Structure
The application follows NestJS's modular architecture:

```
src/api/{module}/
├── dto/                    # Data Transfer Objects with validation
├── entities/              # TypeORM entities
├── controllers/           # HTTP controllers (may include subfolders)
├── services/              # Business logic
├── strategies/            # Authentication strategies (auth module only)
└── {module}.module.ts     # Module definition
```

### Shared Libraries (libs/)
- `@app/base` - Base entity, controller, service, and DTO classes
- `@app/config` - Configuration management service
- `@app/constants` - Application-wide constants
- `@app/crypto` - Cryptography utilities (Argon2 hashing)
- `@app/database` - Database configuration and module
- `@app/decorators` - Custom decorators (@User, @Roles)
- `@app/enum` - Enumerations (Role, Status, etc.)
- `@app/helpers` - Utility functions (pagination, query builders)
- `@app/jwt` - JWT utilities and payload interfaces

### Key Architectural Patterns
1. **Modular Architecture** - Clear separation of concerns with NestJS modules
2. **Monorepo Structure** - Shared libraries for reusable code
3. **Layered Architecture** - Controller → Service → Repository → Entity
4. **Configuration Management** - Environment-based with type-safe config
5. **Authentication Flow** - JWT with refresh tokens, cookie-based auth

## Database Configuration

### TypeORM Setup
- Configuration in `ormconfigs.ts`
- Entities extend BaseEntity (id, createdAt, updatedAt)
- Automatic migrations enabled
- Connection pooling configured

### Environment Variables
Required variables (create `.env.local`):
```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=myapp

# Application
NODE_ENV=development
PORT=8000

# JWT
JWT_SECRET=your_jwt_secret
JWT_REFRESH_TOKEN_EXPIRES_IN=30d
JWT_ACCESS_TOKEN_EXPIRES_IN=15d

# Optional: Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_DB=2
REDIS_PASSWORD=
```

## API Development Patterns

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

### Authentication Patterns
- Use `@User()` decorator to access current user from request
- Apply `@Roles()` decorator for role-based access control
- Authentication handled by JWT strategy and local strategy
- Password hashing with Argon2

## WebSocket Implementation

### Chat System Architecture
- Gateway in `src/api/gateway/` using Socket.IO
- Events: `room:join`, `room:leave`, `message:send`, `message:new`, `typing`
- Room management with conversation IDs
- Message persistence to database
- Real-time typing indicators

## Code Standards

### Naming Conventions
- Files: kebab-case (user.service.ts)
- Classes: PascalCase (UserService)
- Methods: camelCase (getUserById)
- Constants: UPPER_SNAKE_CASE
- Entities: Entity suffix (UserEntity)

### Import Order
1. Node modules (@nestjs/common, etc.)
2. Internal modules (@app/*, src/api/*)
3. Relative imports (./dto/*)

### Validation
- Use `class-validator` decorators for DTO validation
- Common decorators: `@IsString()`, `@IsEmail()`, `@IsNotEmpty()`, `@IsOptional()`

### API Documentation
- All controllers must use `@ApiTags()`
- Methods use `@ApiOperation()` and `@ApiResponse()`
- DTOs use `@ApiProperty()` for documentation

## Testing Guidelines

### Unit Tests
- Test services with mocked repositories
- Use NestJS testing utilities
- Mock external dependencies

### E2E Tests
- Test complete API endpoints
- Use Supertest for HTTP assertions
- Setup and teardown test database

## Development Workflow

1. **Creating New Module**:
   ```bash
   nest g module api/new-module
   nest g controller api/new-module
   nest g service api/new-module
   ```

2. **Creating Entity with Migration**:
   - Create entity file in module's entities folder
   - Run: `pnpm run migration:generate --name=CreateEntityName`
   - Run: `pnpm run migration:run`

3. **Adding CRUD Operations**:
   - Create DTOs (Create, Update, Response)
   - Implement service methods
   - Add controller endpoints with Swagger docs
   - Write unit tests

## Important Configuration Files

- `tsconfig.json` - TypeScript config with path mapping for libs
- `nest-cli.json` - Nest CLI configuration for monorepo
- `ormconfigs.ts` - TypeORM database configuration
- `docker-compose.yaml` - Docker setup for development
- `Bruno API collections` - API testing in `bruno/` directory

## API Base Configuration

- Global prefix: `/api/v1`
- Swagger UI: `/docs`
- WebSocket endpoint: root path `/`
- CORS enabled with credentials support
- Cookie parser configured for authentication

## Key Dependencies

- **Core**: NestJS 11, TypeScript 5.7, Node.js
- **Database**: TypeORM 0.3.27, PostgreSQL, pg driver
- **Authentication**: JWT, Passport.js, Argon2
- **Real-time**: Socket.IO 4.8.1
- **Validation**: class-validator, class-transformer
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest, Supertest, Faker.js
- **Code Quality**: ESLint, Prettier