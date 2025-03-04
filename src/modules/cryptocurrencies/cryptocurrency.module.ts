import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cryptocurrency } from './domain/cryptocurrency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cryptocurrency])],
  providers: [],
  controllers: [],
})
export class CryptocurrencyModule {}
