import { Controller, Get, Param } from '@nestjs/common';
import { WalletService } from '../application/wallet.service';
import { Wallets } from '../domain/wallet.entity';

@Controller('wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get('user/:user_id')
  async getWalletsByUser(
    @Param('user_id') user_id: string,
  ): Promise<Wallets[]> {
    return this.walletService.getWalletsByUser(user_id);
  }
}
