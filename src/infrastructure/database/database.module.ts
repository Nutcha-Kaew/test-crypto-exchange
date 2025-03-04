import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/modules/users/domain/user.entity';
import { Cryptocurrencys } from 'src/modules/cryptocurrencies/domain/cryptocurrency.entity';
import { Wallets } from 'src/modules/wallets/domain/wallet.entity';
import { SeederService } from './seeder.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Users, Cryptocurrencys, Wallets],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Users, Cryptocurrencys, Wallets]),
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class DatabaseModule {}
