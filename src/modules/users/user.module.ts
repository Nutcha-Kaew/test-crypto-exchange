import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './domain/user.entity';
import { UserController } from './interface/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [],
  controllers: [UserController],
})
export class UserModule {}
