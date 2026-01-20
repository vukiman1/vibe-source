import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { ConversationsEntity } from './conversations.entity';
import { UserEntity } from 'src/api/user/entities/user.entity';

@Entity('conversations_members')
export class ConversationsMembersEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  userId!: UserEntity;

  @ManyToOne(() => ConversationsEntity, (conversation) => conversation.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'conversation_id' })
  conversation!: ConversationsEntity;
}
