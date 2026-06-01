import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../application/user.service';
import { User } from '../domain/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id/wallets')
  async getUserWallets(@Param('id') userId: string): Promise<User | null> {
    const user = await this.usersService.findUserWithWallets(userId);
    if (!user) {
      throw new (await import('@nestjs/common')).NotFoundException();
    }
    return user;
  }
}
