import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../domain/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  findOne(userId: string) {
    return this.userRepository.findOne({
      where: {user_id:userId},
      relations: ['wallets', 'fromTransactions', 'toTransactions', 'orders', 'fiatTransactions'],
    });
  }
}
