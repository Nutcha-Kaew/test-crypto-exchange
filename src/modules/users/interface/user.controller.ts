import { Controller, Get, Param } from '@nestjs/common';
import { WalletService } from 'src/modules/wallets/application/wallet.service';

@Controller('user')
export class UserController {
  constructor(private readonly walletService: WalletService) {}

  @Get(':userId/wallets')
  async getWalletsByUser(@Param('userId') userId: string) {
    return this.walletService.getWalletsByUser(userId);
  }
}
