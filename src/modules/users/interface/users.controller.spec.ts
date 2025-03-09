import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../application/user.service';
import { User } from '../domain/user.entity';
import { NotFoundException } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [

        {
          provide: UsersService,
          useValue: {
            findUserWithWallets: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should return user with wallets', async () => {
    const mockUser: User = { user_id: '1', username: 'manow_nutcha', email: 'nutchakk.dev@gmail.com',, password_hash: 'p@assw0rd' };
    jest.spyOn(service, 'findUserWithWallets').mockResolvedValue(mockUser);

    const result = await controller.getUserWallets('1');
    expect(result).toEqual(mockUser);
  });

  it('should throw NotFoundException if user not found', async () => {
    jest.spyOn(service, 'findUserWithWallets').mockResolvedValue(null);

    await expect(controller.getUserWallets('1')).rejects.toThrow(NotFoundException);
  });
});
