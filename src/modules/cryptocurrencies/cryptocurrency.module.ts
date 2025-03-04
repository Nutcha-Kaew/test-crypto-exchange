import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cryptocurrencys } from './domain/cryptocurrency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cryptocurrencys])],
  providers: [],
  controllers: [],
})
export class CryptocurrencyModule {}
