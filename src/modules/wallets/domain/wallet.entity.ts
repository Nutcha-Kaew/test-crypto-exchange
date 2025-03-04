import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Users } from 'src/modules/users/domain/user.entity';
import { Cryptocurrencys } from 'src/modules/cryptocurrencies/domain/cryptocurrency.entity';

@Entity()
export class Wallets {
  @PrimaryColumn()
  wallet_id: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @ManyToOne(() => Cryptocurrencys)
  @JoinColumn({ name: 'crypto_id' })
  cryptocurrency: Cryptocurrencys;

  @Column('decimal')
  balance: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
