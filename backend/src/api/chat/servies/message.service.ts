import { Injectable } from '@nestjs/common';
import { BaseService } from '@app/base';
import { MessageEntity } from '../entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService extends BaseService<MessageEntity> {
  name = 'Message';

  constructor(
    @InjectRepository(MessageEntity)
    public readonly messageRepo: Repository<MessageEntity>,
  ) {
    super(messageRepo);
  }
}
