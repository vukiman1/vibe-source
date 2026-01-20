import { Column, Entity, Index } from 'typeorm';
import { ProductType } from '@app/enum';
import { BaseEntity } from '@app/base/base.entity';

@Entity('products')
@Index('fulltext_index', ['title', 'description'], { fulltext: true })
export class ProductsEntity extends BaseEntity {
  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @Column({
    type: 'enum',
    enum: ProductType,
    nullable: false,
  })
  type!: ProductType;
}
