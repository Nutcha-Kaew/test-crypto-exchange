// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/user.module';
import { CryptocurrencyModule } from './modules/cryptocurrencies/cryptocurrency.module';
import { Users } from './modules/users/domain/user.entity';
import { Cryptocurrencys } from './modules/cryptocurrencies/domain/cryptocurrency.entity';
import { Wallets } from './modules/wallets/domain/wallet.entity';
import { SeederService } from './infrastructure/database/seeder.service';
import { WalletsModule } from './modules/wallets/wallets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:', 
      entities: [Users, Cryptocurrencys, Wallets], 
      synchronize: true,  
      dropSchema: true,  
    }),
    UserModule,
    CryptocurrencyModule, WalletsModule
  ],
  providers: [SeederService], 
})
export class AppModule {}
