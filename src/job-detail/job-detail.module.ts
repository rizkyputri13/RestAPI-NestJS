import { Module } from '@nestjs/common';
import { JobDetailService } from './job-detail.service';

@Module({
  providers: [JobDetailService]
})
export class JobDetailModule {}
