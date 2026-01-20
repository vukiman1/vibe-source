import { Injectable } from '@nestjs/common';
import { BaseService } from '@app/base';
import { ConversationsEntity } from '../entities/conversations.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConversationService extends BaseService<ConversationsEntity> {
  name = 'Conversation';

  constructor(
    @InjectRepository(ConversationsEntity)
    public readonly conversationRepo: Repository<ConversationsEntity>,
  ) {
    super(conversationRepo);
  }

  async test() {
    return 'test';
  }
}
