import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from 'src/api/auth/auth.module';
// import { config } from 'config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@app/database';
import { UserModule } from 'src/api/user/user.module';
import { ChatModule } from 'src/api/chat/chat.module';
import { CryptoModule } from '@app/crypto';
import { JwtModule } from '@app/jwt';
import configuration from '@app/config';
import { ProductsModule } from 'src/api/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
      load: [configuration],
      expandVariables: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'client'),
    }),
    DatabaseModule,
    JwtModule,
    CryptoModule,
    AuthModule,
    UserModule,
    ChatModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
