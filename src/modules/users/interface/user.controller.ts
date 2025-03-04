import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../application/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.userService.findOne(userId);
  }
}
