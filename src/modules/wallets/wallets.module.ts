import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallets } from './domain/wallet.entity';
import { WalletService } from './application/wallet.service';
import { WalletController } from './interface/wallet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Wallets])],
  providers: [WalletService],
  controllers: [WalletController],
})
export class WalletsModule {}
