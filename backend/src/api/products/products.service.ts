import { BaseService } from '@app/base/base.service';
import { Injectable } from '@nestjs/common';
import { ProductsEntity } from './entities/products.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService extends BaseService<ProductsEntity> {
  name = 'Products';
  constructor(
    @InjectRepository(ProductsEntity)
    public readonly productsRepo: Repository<ProductsEntity>,
  ) {
    super(productsRepo);
  }
}
