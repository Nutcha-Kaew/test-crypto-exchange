import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Wallets } from 'src/modules/wallets/domain/wallet.entity';
import { Transaction } from 'src/modules/transaction/domain/transaction.entity';
import { Order } from 'src/modules/order/domain/order.entity';
import { FiatTransaction } from 'src/modules/fiat-transaction/domain/fiat-transaction.entity';

@Entity()
export class User {
  @PrimaryColumn()
  user_id: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @OneToMany(() => Wallets, wallet => wallet.user)
  wallets: Wallets[];

  @OneToMany(() => Transaction, transaction => transaction.from_user)
  transactions_from: Transaction[];

  @OneToMany(() => Transaction, transaction => transaction.to_user)
  transactions_to: Transaction[];

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

  @OneToMany(() => FiatTransaction, fiatTransaction => fiatTransaction.user)
  fiat_transactions: FiatTransaction[];
}