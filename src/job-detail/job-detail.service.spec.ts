import { Test, TestingModule } from '@nestjs/testing';
import { JobDetailService } from './job-detail.service';

describe('JobDetailService', () => {
  let service: JobDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobDetailService],
    }).compile();

    service = module.get<JobDetailService>(JobDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
