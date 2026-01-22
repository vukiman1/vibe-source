# Project Global Rules

## Language Policy

- All communications, comments, and documentation should be in **Vietnamese** (Tiếng Việt) as primary.
- Code identifiers (variables, classes, functions) must be in English.

## Strict Type-Safety

- **No `any`**: The use of `any` is strictly forbidden. Use specific interfaces, types, generics, or `unknown` where necessary.
- **Explicit Types**: Use explicit return types for all functions and public class members.
- **Type Narrowing**: Properly narrow down types using type guards or assertions.

## Constants & Magic Values

- **No Magic Strings/Numbers**: All non-trivial literal values (routes, API keys, timeout values, labels, CSS classes) must be moved to a `constants/` file.
- **Centralized Config**: Ensure that configuration values are reachable through a central constant or config helper.

## Clean Code & Naming

- **Files**: Use `kebab-case` for file names (e.g., `user-controller.ts`).
- **Variables/Functions**: Use `camelCase`.
- **Classes/Interfaces/Types**: Use `PascalCase`.
- **Constants**: Use `SCREAMING_SNAKE_CASE`.
- **Brevity**: Functions should be small (max 30 lines) and single-purpose.
- **Early Returns**: Favor guard clauses and early returns to reduce nesting.

## Git & Workflow

- Use `/commit` workflow for all commits.
- Ensure all automated checks pass before finalizing a task.
