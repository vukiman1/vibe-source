# Frontend Style Guide (Next.js)

## Project Structure

- Use **App Router** (`app/` directory).
- Components in `src/components/`, organized by feature (`ui/`, `layout/`, etc.).
- Use `src/actions/` for Server Actions.

## Clean Components & Reusability

- **Reusable Logic**: Extract complex or repetitive logic into custom hooks (`src/hooks/`) or shared utility functions.
- **Small Components**: Keep components focused on a single responsibility.
- **Lodash Usage**: Standardize on `lodash` for data transformations and heavy processing on the client side.

## Icon Strategy

- **Library Icons Only**: Use icons from established libraries (e.g., `lucide-react`).
- **No Raw SVG**: Do not embed raw `<svg>` tags directly into component files. If a custom SVG is required, wrap it in a dedicated component or use an SVG-to-component loader.

## API Communication

- Always use the `api` instance from `@/lib/request` for HTTP calls.
- `HttpClient` automatically handles cookie forwarding and inclusion.
- Use `ApiResponse<T>` types for all API responses.

## UI & Styling

- Use **Vanilla CSS** or **TailwindCSS**.
- Follow visual excellence rules (vibrant colors, modern typography, micro-animations).

## Authentication

- Rely on the automatic cookie handling in `request.ts`.
- Protected routes handled in `proxy.ts`.
