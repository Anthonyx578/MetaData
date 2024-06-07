import { Test, TestingModule } from '@nestjs/testing';
import { DataBaseBackController } from './data-base-back.controller';

describe('DataBaseBackController', () => {
  let controller: DataBaseBackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataBaseBackController],
    }).compile();

    controller = module.get<DataBaseBackController>(DataBaseBackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
