import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsEntity } from './entities/products.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProductsController],
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  providers: [ProductsService],
})
export class ProductsModule {}
