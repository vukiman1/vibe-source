import dotenv from "dotenv";

dotenv.config({
  path: [".env", ".env.local", ".env.production"],
});

export default () => ({
  app: {
    port: parseInt(process.env.PORT || "8000", 10),
    nodeEnv: process.env.NODE_ENV || "local",
  },
  database: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432", 10),
    username: process.env.DB_USERNAME || "admin",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_DATABASE || "myapp",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret",
    refreshTokenExpiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN || "30d",
    accessTokenExpiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN || "15d",
  },
  crypto: {
    secretKey: process.env.SECRET_KEY || "vibe_source_secret_key",
    secretKeyIv: process.env.SECRET_KEY_IV || "vibe_source_secret_iv",
  },
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT || "6379", 10),
    password: process.env.REDIS_PASSWORD || undefined,
  },
});
