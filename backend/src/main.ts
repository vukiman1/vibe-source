import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app/app.module';
import cookieParser from 'cookie-parser';
import configuration from '@app/config';
import { useSwagger } from './app/app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });

  app.setGlobalPrefix('api/v1');
  app.use(cookieParser());

  useSwagger(app);
  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(configuration().app.port);
}
bootstrap().catch(console.error);
