import { Test, TestingModule } from '@nestjs/testing';
import { BackUpService } from './back-up.service';

describe('BackUpService', () => {
  let service: BackUpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackUpService],
    }).compile();

    service = module.get<BackUpService>(BackUpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
