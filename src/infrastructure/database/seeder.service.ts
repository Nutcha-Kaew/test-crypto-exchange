import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/modules/users/domain/user.entity';
import { Wallets } from 'src/modules/wallets/domain/wallet.entity';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Wallets)
    private walletsRepository: Repository<Wallets>,
  ) {}

  async seed() {
    const user = this.usersRepository.create({
      user_id: '1',
      username: 'manow_nutcha',
      email: 'nutchakk.dev@gmail.com.com',
      password_hash: 'hashedpassword',
    });
    await this.usersRepository.save(user);

    const wallet = this.walletsRepository.create({
      wallet_id: '1',
      user_id: user.user_id,
      balance: 0.5,
    });
    await this.walletsRepository.save(wallet);
  }
}
