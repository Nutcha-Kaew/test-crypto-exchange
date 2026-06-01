import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/modules/users/domain/user.entity';
import { Cryptocurrency } from 'src/modules/cryptocurrencies/domain/cryptocurrency.entity';

@Entity()
export class Transaction {
  @PrimaryColumn()
  transaction_id: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column()
  from_user_id: string;

  @Column()
  to_user_id: string;

  @Column()
  crypto_id: string;

  @Column('decimal')
  amount: number;

  @Column()
  transaction_type: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.transactions_from)
  from_user: User;

  @ManyToOne(() => User, (user) => user.transactions_to)
  to_user: User;

  @ManyToOne(
    () => Cryptocurrency,
    (cryptocurrency) => cryptocurrency.transactions,
  )
  cryptocurrency: Cryptocurrency;
}
