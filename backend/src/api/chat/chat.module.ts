import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';
import { MessageEntity } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversationsEntity } from './entities/conversations.entity';
import { ConversationsMembersEntity } from './entities/conversations-members.entity';
import { MessageService } from './servies/message.service';
import { ConversationService } from './servies/conversation.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ConversationsEntity,
      ConversationsMembersEntity,
      MessageEntity,
    ]),
  ],
  controllers: [ChatController],
  providers: [ChatGateway, MessageService, ConversationService],
})
export class ChatModule {}
