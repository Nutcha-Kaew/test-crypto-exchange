// wallets.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallets } from './domain/wallet.entity';
import { WalletService } from './application/wallet.service';
import { WalletController } from './interface/wallet.controller';
import { UsersModule } from '../users/users.module';
import { CryptocurrencyModule } from '../cryptocurrencies/cryptocurrency.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Wallets]),
    UsersModule,
    CryptocurrencyModule,
  ],
  controllers: [WalletController],
  providers: [WalletService],
  exports: [WalletService],
})
export class WalletsModule {}
