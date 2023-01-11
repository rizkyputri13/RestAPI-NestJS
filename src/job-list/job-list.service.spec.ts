import { Test, TestingModule } from '@nestjs/testing';
import { JobListService } from './job-list.service';

describe('JobListService', () => {
  let service: JobListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobListService],
    }).compile();

    service = module.get<JobListService>(JobListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
