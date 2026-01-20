import { Controller, Get } from '@nestjs/common';
import { ConversationService } from './servies/conversation.service';
@Controller('chat')
export class ChatController {
  constructor(private readonly conversationService: ConversationService) {}
  @Get('conversations')
  getAllConversations() {
    return this.conversationService.getAll();
  }
}
