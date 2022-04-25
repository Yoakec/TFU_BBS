import { Test, TestingModule } from '@nestjs/testing';
import { UpService } from './up.service';

describe('UpService', () => {
  let service: UpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpService],
    }).compile();

    service = module.get<UpService>(UpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
