# My App Backend

Ứng dụng backend được xây dựng bằng NestJS framework với TypeScript, hỗ trợ authentication, real-time chat, và quản lý sản phẩm.

## 🏗️ Kiến trúc dự án

- **Framework**: NestJS với TypeScript
- **Database**: PostgreSQL với TypeORM
- **Authentication**: JWT với Argon2 hashing
- **Real-time**: Socket.IO cho chat
- **API Documentation**: Swagger/OpenAPI
- **Package Manager**: pnpm với monorepo structure

## 🔧 Cài đặt

### Yêu cầu hệ thống

- Node.js >= 18
- PostgreSQL >= 13
- pnpm >= 8

### 1. Clone repository

```bash
git clone https://github.com/vukiman1/myapp-backend
cd myapp-backend
```

### 2. Cài đặt dependencies

```bash
pnpm install
```

### 3. Cấu hình database

Tạo database PostgreSQL và cấu hình trong file `.env.local`:

```bash
cp .env.example .env.local
```

Cập nhật các biến môi trường trong `.env.local`:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=myapp

# Application
PORT=8000
NODE_ENV=local

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

### 4. Chạy migrations

```bash
pnpm run migration:run
```

### 5. Seed data (tùy chọn)

```bash
pnpm run seed
```

## 🚀 Chạy ứng dụng

### Development mode

```bash
# Chạy với watch mode
pnpm run start:dev
```

### Debug mode

```bash
pnpm run start:debug
```

## 📚 API Documentation

Sau khi chạy ứng dụng, truy cập Swagger UI tại:

```
http://localhost:8000/docs
```

## 🧪 Testing

```bash
# Unit tests
pnpm run test

# E2E tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov

# Watch mode
pnpm run test:watch
```

## 🔍 Code Quality

```bash
# Linting
pnpm run lint

# Format code
pnpm run format
```

## 📁 Cấu trúc dự án

```
myapp-backend/
├── src/
│   ├── api/                    # API modules
│   │   ├── auth/              # Authentication module
│   │   │   ├── dto/           # Data Transfer Objects
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.module.ts
│   │   ├── user/              # User management
│   │   ├── chat/              # Real-time chat
│   │   ├── products/          # Product management
│   │   └── gateway/           # WebSocket gateway
│   ├── app/                   # Core application
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   ├── app.module.ts
│   │   └── app.swagger.ts
│   ├── migrations/            # Database migrations
│   ├── types/                 # TypeScript type definitions
│   ├── utils/                 # Utility functions
│   └── main.ts               # Application entry point
├── libs/                      # Shared libraries
│   ├── base/                 # Base classes and interfaces
│   ├── constants/            # Application constants
│   ├── database/             # Database configuration
│   ├── decorators/           # Custom decorators
│   ├── enum/                 # Enumerations
│   ├── helpers/              # Helper functions
│   └── jwt/                  # JWT utilities
├── config/                   # Configuration files
├── client/                   # Static frontend files
├── seed/                     # Database seeding
├── test/                     # Test files
├── scripts/                  # Build and deployment scripts
├── docker-compose.yaml       # Docker configuration
├── Dockerfile               # Docker image definition
├── ormconfigs.ts            # TypeORM configuration
└── package.json             # Dependencies and scripts
```

## CLI cơ bản

```bash
#cài thêm library
nest g library <library name>
#cài thêm module
nest g module api/<module>
nest g controller api/<controller>
nest g service api/<service>
```

## 🌐 API Endpoints

Base URL: `http://localhost:8000/api/v1`

### Authentication

- `POST /auth/login` - Đăng nhập
- `POST /auth/register` - Đăng ký tài khoản
- `POST /auth/logout` - Đăng xuất
- `GET /auth/profile` - Lấy thông tin profile

### User Management

- `GET /user` - Lấy danh sách users
- `GET /user/:id` - Lấy thông tin user theo ID
- `PUT /user/:id` - Cập nhật thông tin user
- `DELETE /user/:id` - Xóa user

### Products

- `GET /products` - Lấy danh sách sản phẩm
- `GET /products/:id` - Lấy thông tin sản phẩm
- `POST /products` - Tạo sản phẩm mới
- `PUT /products/:id` - Cập nhật sản phẩm
- `DELETE /products/:id` - Xóa sản phẩm

### Chat (WebSocket)

- `ws://localhost:8000` - Kết nối WebSocket
- Events: `join_room`, `leave_room`, `send_message`, `typing`

## 🐳 Docker

### Chạy với Docker Compose

```bash
# Build và chạy
docker-compose up --build

# Chạy ở background
docker-compose up -d

# Dừng services
docker-compose down
```

### Environment Variables cho Docker

Tạo file `.env.local` hoặc `.env.production`:

```env
NODE_ENV=production
PORT=8000
DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=admin
DB_DATABASE=myapp
JWT_SECRET=your_jwt_secret
```

## 🔧 Development

### Tạo migration mới

```bash
# Tạo migration
pnpm run migration:generate --name=CreateUserTable

# Chạy migration
pnpm run migration:run

# Revert migration
pnpm run migration:revert
```

### Tạo module mới

```bash
# Tạo module
nest g module api/module-name

# Tạo controller
nest g controller api/module-name

# Tạo service
nest g service api/module-name

# Tạo library
nest g library libs/library-name
```

## ⚙️ Configuration

### Environment Variables

| Variable         | Description       | Default     |
| ---------------- | ----------------- | ----------- |
| `PORT`           | Port ứng dụng     | `8000`      |
| `NODE_ENV`       | Environment       | `local`     |
| `DB_HOST`        | Database host     | `localhost` |
| `DB_PORT`        | Database port     | `5432`      |
| `DB_USERNAME`    | Database username | `admin`     |
| `DB_PASSWORD`    | Database password | `admin`     |
| `DB_DATABASE`    | Database name     | `myapp`     |
| `JWT_SECRET`     | JWT secret key    | Required    |
| `JWT_EXPIRES_IN` | JWT expiration    | `7d`        |

### Database Configuration

Database được cấu hình trong `ormconfigs.ts` với TypeORM. Hỗ trợ:

- PostgreSQL
- Migrations
- Entity synchronization (chỉ trong development)
- Connection pooling
