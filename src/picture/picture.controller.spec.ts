import { Test, TestingModule } from '@nestjs/testing';
import { pictureController } from './picture.controller';

describe('pictureController', () => {
  let controller: pictureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [pictureController],
    }).compile();

    controller = module.get<pictureController>(pictureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
