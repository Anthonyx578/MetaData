import { Test, TestingModule } from '@nestjs/testing';
import { BackUpController } from './back-up.controller';

describe('BackUpController', () => {
  let controller: BackUpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BackUpController],
    }).compile();

    controller = module.get<BackUpController>(BackUpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
