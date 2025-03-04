import { Test, TestingModule } from '@nestjs/testing';
import { WalletService } from '../application/wallet.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Wallets } from '../domain/wallet.entity';
import { User} from 'src/modules/users/domain/user.entity';
import { Cryptocurrency } from 'src/modules/cryptocurrencies/domain/cryptocurrency.entity';
import { Repository } from 'typeorm';

describe('WalletService', () => {
  let walletService: WalletService;
  let walletRepository: Repository<Wallets>;
  let userRepository: Repository<User>;
  let cryptoRepository: Repository<Cryptocurrency>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WalletService,
        {
          provide: getRepositoryToken(Wallets),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Cryptocurrency),
          useClass: Repository,
        },
      ],
    }).compile();

    walletService = module.get<WalletService>(WalletService);
    walletRepository = module.get<Repository<Wallets>>(getRepositoryToken(Wallets));
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    cryptoRepository = module.get<Repository<Cryptocurrency>>(getRepositoryToken(Cryptocurrency));
  });

  it('should be defined', () => {
    expect(walletService).toBeDefined();
  });

  it('should return wallets for a user', async () => {
    const mockUser = new User();
    mockUser.user_id = 'user-id-123';
    mockUser.username = 'john_doe';
    mockUser.email = 'john@example.com';

    const mockCrypto = new Cryptocurrency();
    mockCrypto.crypto_id = 'crypto-id-123';
    mockCrypto.name = 'Bitcoin';
    mockCrypto.symbol = 'BTC';
    mockCrypto.price = 50000;

    const mockWallet = new Wallets();
    mockWallet.wallet_id = 'wallet-id-123';
    mockWallet.user = mockUser;
    mockWallet.cryptocurrency = mockCrypto;
    mockWallet.balance = 2.5;

    jest.spyOn(walletRepository, 'find').mockResolvedValue([mockWallet]);

    const result = await walletService.getWalletsByUser(mockUser.user_id);

    expect(result).toHaveLength(1);
    expect(result[0].user.username).toBe(mockUser.username);
    expect(result[0].cryptocurrency.name).toBe(mockCrypto.name);
  });
});
