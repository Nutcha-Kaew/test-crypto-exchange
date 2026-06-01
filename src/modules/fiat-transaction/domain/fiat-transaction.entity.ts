import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/modules/users/domain/user.entity';

@Entity()
export class FiatTransaction {
  @PrimaryColumn()
  fiat_transaction_id: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column()
  user_id: string;

  @Column('decimal')
  amount: number;

  @Column()
  currency: string;

  @Column()
  transaction_type: string;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.fiat_transactions)
  user: User;
}
