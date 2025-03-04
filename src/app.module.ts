import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { WalletController } from './modules/wallets/interface/wallet.controller';
import { WalletService } from './modules/wallets/application/wallet.service';
import { SeederService } from './infrastructure/database/seeder.service';

@Module({
  imports: [DatabaseModule],
  controllers: [WalletController],
  providers: [WalletService, SeederService],
})
export class AppModule {}
