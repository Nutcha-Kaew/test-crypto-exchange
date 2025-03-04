// src/domain/entities/cryptocurrency.entity.ts
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Cryptocurrencys {
  @PrimaryColumn()
  crypto_id: string;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column('decimal')
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
