export function handleCodeLanguageIcon(lang: string) {
  const langLower = lang.toLowerCase();
  const iconPath = "/assets/icon/CodeLanguages";

  switch (langLower) {
    case "html":
      return `${iconPath}/html.svg`;
    case "css":
      return `${iconPath}/css.svg`;
    case "js":
    case "javascript":
      return `${iconPath}/javascript.svg`;
    case "ts":
    case "typescript":
      return `${iconPath}/typescript.svg`;
    case "react":
      return `${iconPath}/react.svg`;
    case "next":
    case "nextjs":
    case "next.js":
      return `${iconPath}/nextjs.svg`;
    case "node":
    case "nodejs":
    case "node.js":
      return `${iconPath}/nodejs.svg`;
    case "python":
    case "py":
      return `${iconPath}/python.svg`;
    case "php":
      return `${iconPath}/php.svg`;
    case "java":
      return `${iconPath}/java.svg`;
    case "cpp":
    case "c++":
      return `${iconPath}/cpp.svg`;
    case "csharp":
    case "c#":
      return `${iconPath}/csharp.svg`;
    case "mysql":
      return `${iconPath}/mysql.svg`;
    case "postgresql":
    case "postgres":
      return `${iconPath}/postgresql.svg`;
    case "nest":
    case "nestjs":
      return `${iconPath}/nestjs.svg`;
    case "express":
    case "expressjs":
      return `${iconPath}/express.svg`;
    case "django":
      return `${iconPath}/django.svg`;
    case "electron":
      return `${iconPath}/electron.svg`;
    case "rust":
      return `${iconPath}/rust.svg`;
    case "n8n":
      return `${iconPath}/n8n.svg`;
    default:
      return "";
  }
}
