import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/modules/users/domain/user.entity';
import { Cryptocurrency } from 'src/modules/cryptocurrencies/domain/cryptocurrency.entity';

@Entity()
export class Wallets {
  @PrimaryColumn()
  wallet_id: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column()
  user_id: string;

  @Column()
  crypto_id: string;

  @Column('decimal')
  balance: number;

  @ManyToOne(() => User, (user) => user.wallets)
  user: User;

  @ManyToOne(() => Cryptocurrency, (cryptocurrency) => cryptocurrency.wallets)
  cryptocurrency: Cryptocurrency;
}
