// src/infrastructure/database/seeder/seeder.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/modules/users/domain/user.entity';
import { Cryptocurrencys } from 'src/modules/cryptocurrencies/domain/cryptocurrency.entity';
import { Wallets } from 'src/modules/wallets/domain/wallet.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Cryptocurrencys)
    private cryptoRepository: Repository<Cryptocurrencys>,
    @InjectRepository(Wallets)
    private walletRepository: Repository<Wallets>,
  ) {}

  async seed() {
    // Create a mock user
    const user = this.userRepository.create({
      user_id: uuidv4(),
      username: 'manow_nutcja',
      email: 'nutchall.dev@gmail.com',
    });
    await this.userRepository.save(user);

    // Create a mock cryptocurrency
    const crypto = this.cryptoRepository.create({
      crypto_id: uuidv4(),
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 50000,
    });
    await this.cryptoRepository.save(crypto);

    // Create a mock wallet
    const wallet = this.walletRepository.create({
      wallet_id: uuidv4(),
      user: user,
      cryptocurrency: crypto,
      balance: 2.5,
    });
    await this.walletRepository.save(wallet);
  }
}
