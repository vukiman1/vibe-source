import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { BaseController } from '@app/base';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController extends BaseController<UserEntity>(
  UserEntity,
  'User',
) {
  relations: string[] = [];
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
