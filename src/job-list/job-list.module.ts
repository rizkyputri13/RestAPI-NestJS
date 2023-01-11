import { Module } from '@nestjs/common';
import { JobListService } from './job-list.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [JobListService],
})
export class JobListModule {}
