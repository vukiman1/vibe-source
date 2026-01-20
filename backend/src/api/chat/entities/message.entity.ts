import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ConversationsEntity } from './conversations.entity';
import { BaseEntity } from '@app/base';

@Entity('messages')
export class MessageEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  content!: string;

  @ManyToOne(() => ConversationsEntity, (conversation) => conversation.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'reply_to_id' })
  replyToId!: MessageEntity;

  @JoinColumn({ name: 'conversation_id' })
  conversation!: ConversationsEntity;
}
