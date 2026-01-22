# Backend Style Guide (NestJS)

## Project Structure

- Follow the modular architecture of NestJS.
- APIs are located in `src/api/`.
- Shared logic should be placed in `libs/` and accessed via `@app/*` aliases.

## Clean Code & Modularity

- **Service Responsibility**: Break down complex services into smaller, reusable helper functions or specialized services within the same domain.
- **Lodash Usage**: Use `lodash` for complex object/array manipulations (cloning, grouping, mapping) to maintain expressive and readable code.
- **DRY**: Do not duplicate business logic. Extract common patterns into the `libs/` directory.

## Controllers & Services

- Use `BaseController` and `BaseService` patterns where applicable (see `libs/base`).
- Use `@User()` decorators and guards for protected endpoints.
- Controllers should handle request validation via DTOs and call services for business logic.

## Database (TypeORM)

- Entities should extend `BaseEntity` from `@app/base`.
- Use `Repository` pattern.
- Always create migrations for schema changes.

## Error Handling

- Use built-in NestJS exceptions (e.g., `NotFoundException`, `BadRequestException`).
- Response structure should follow the `ApiResponse<T>` pattern.
