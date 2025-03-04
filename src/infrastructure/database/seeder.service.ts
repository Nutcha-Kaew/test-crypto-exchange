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
    // Create mock users
    const user = this.userRepository.create({
      user_id: uuidv4(),
      username: 'manow_nutcha',
      email: 'nutchakk.dev@gmail.com',
      password_hash: 'p@ssw0rd',
    });
    await this.userRepository.save(user);

    // Create mock cryptocurrencies
    const crypto = this.cryptoRepository.create({
      crypto_id: uuidv4(),
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 50000,
    });
    await this.cryptoRepository.save(crypto);

    // Create mock wallets
    const wallet = this.walletRepository.create({
      wallet_id: uuidv4(),
      user: user,
      cryptocurrency: crypto,
      balance: 1.0,
    });
    await this.walletRepository.save(wallet);
  }
}
