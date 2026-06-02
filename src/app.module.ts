import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { CryptocurrencyModule } from './modules/cryptocurrencies/cryptocurrency.module';
import { WalletsModule } from './modules/wallets/wallets.module';
import { User } from './modules/users/domain/user.entity';
import { Cryptocurrency } from './modules/cryptocurrencies/domain/cryptocurrency.entity';
import { Wallets } from './modules/wallets/domain/wallet.entity';
import { Transaction } from './modules/transaction/domain/transaction.entity';
import { Order } from './modules/order/domain/order.entity';
import { FiatTransaction } from './modules/fiat-transaction/domain/fiat-transaction.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'sqlite',
        database: config.get<string>('DATABASE_FILE', 'database.sqlite'),
        entities: [User, Cryptocurrency, Wallets, Transaction, Order, FiatTransaction],
        synchronize: true,
      }),
    }),
    UsersModule,
    CryptocurrencyModule,
    WalletsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
