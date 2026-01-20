import { ConversationType } from '@app/enum/chat.enum';
import { Column, Entity, OneToMany } from 'typeorm';
import { ConversationsMembersEntity } from './conversations-members.entity';
import { BaseEntity } from '@app/base';

@Entity('conversations')
export class ConversationsEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar!: string;

  @Column({ type: 'enum', enum: ConversationType })
  type!: ConversationType;

  @OneToMany(() => ConversationsMembersEntity, (member) => member.conversation)
  members!: ConversationsMembersEntity[];
}
