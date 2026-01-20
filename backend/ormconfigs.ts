import { DataSource, DataSourceOptions } from 'typeorm';
import configuration from '@app/config';
import { UserEntity } from 'src/api/user/entities/user.entity';
import { ProductsEntity } from 'src/api/products/entities/products.entities';
import { MessageEntity } from 'src/api/chat/entities/message.entity';
import { ConversationsMembersEntity } from 'src/api/chat/entities/conversations-members.entity';
import { ConversationsEntity } from 'src/api/chat/entities/conversations.entity';

//ok
interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const { host, port, username, password, database } = configuration()
  .database as DatabaseConfig;

const dbConfig: DatabaseConfig = {
  host,
  port: Number(port),
  username,
  password,
  database,
};

export const options: DataSourceOptions = {
  type: 'postgres',
  ...dbConfig,
  entities: [
    UserEntity,
    ProductsEntity,
    ConversationsEntity,
    ConversationsMembersEntity,
    MessageEntity,
  ],
  migrationsTableName: 'migrations',
  migrations: ['migrations/*.ts'],
  synchronize: configuration().app.nodeEnv !== 'production',
};
export const AppDataSource = new DataSource(options);
