import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallets } from '../domain/wallet.entity';
import { Users } from 'src/modules/users/domain/user.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallets)
    private walletRepository: Repository<Wallets>,
  ) {}

  async getWalletsByUser(user_id: string): Promise<Wallets[]> {
    return this.walletRepository.find({
      where: { user: { user_id } },
      relations: ['user', 'cryptocurrency'],
    });
  }
}
