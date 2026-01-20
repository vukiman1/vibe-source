import { Injectable } from '@nestjs/common';
import { ConversationsEntity } from '../entities/conversations.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@app/base';

@Injectable()
export class ChatService extends BaseService<ConversationsEntity> {
  name = 'Chat';

  constructor(
    @InjectRepository(ConversationsEntity)
    public readonly conversationsRepo: Repository<ConversationsEntity>,
  ) {
    super(conversationsRepo);
  }
}
