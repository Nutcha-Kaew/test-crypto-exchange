import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { CryptocurrencyModule } from './modules/cryptocurrencies/cryptocurrency.module';
import { WalletsModule } from './modules/wallets/wallets.module';
import { User } from './modules/users/domain/user.entity';
import { Cryptocurrency } from './modules/cryptocurrencies/domain/cryptocurrency.entity';
import { Wallets } from './modules/wallets/domain/wallet.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [User, Cryptocurrency, Wallets],
      synchronize: true,
    }),
    UsersModule,
    CryptocurrencyModule,
    WalletsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
