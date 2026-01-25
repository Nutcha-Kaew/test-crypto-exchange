import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/domain/user.entity';
import { Cryptocurrency } from 'src/modules/cryptocurrencies/domain/cryptocurrency.entity';
import { Wallets } from 'src/modules/wallets/domain/wallet.entity';
import { SeederService } from './seeder.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [User, Cryptocurrency, Wallets],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Cryptocurrency, Wallets]),
  ],
  providers: [SeederService],
  exports: [SeederService],
})
   "SCSS": {
      "formatter": "prettier",
      "format_on_save": "on",
      "tab_size": 2,
      "hard_tabs": false
    },
export class DatabaseModule {}
