import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Wallets } from 'src/modules/wallets/domain/wallet.entity';
import { Transaction } from 'src/modules/transaction/domain/transaction.entity';
import { Order } from 'src/modules/order/domain/order.entity';

@Entity()
export class Cryptocurrency {
  @PrimaryColumn()
  crypto_id: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column('decimal')
  price: number;

  @OneToMany(() => Wallets, (wallet) => wallet.cryptocurrency)
  wallets: Wallets[];

  @OneToMany(() => Transaction, (transaction) => transaction.cryptocurrency)
  transactions: Transaction[];

  @OneToMany(() => Order, (order) => order.cryptocurrency)
  orders: Order[];
}
