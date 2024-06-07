import { Test, TestingModule } from '@nestjs/testing';
import { DataBaseBackService } from './data-base-back.service';

describe('DataBaseBackService', () => {
  let service: DataBaseBackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataBaseBackService],
    }).compile();

    service = module.get<DataBaseBackService>(DataBaseBackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
