import { Test, TestingModule } from '@nestjs/testing';
import { pictureService } from './picture.service';

describe('pictureService', () => {
  let service: pictureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [pictureService],
    }).compile();

    service = module.get<pictureService>(pictureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
