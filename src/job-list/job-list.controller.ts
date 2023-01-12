import { Controller, Get, Param } from '@nestjs/common';
import { JobListService } from './job-list.service';

@Controller('jobs')
export class JobListController {
  constructor(private jobListService: JobListService) {}

  @Get('/jobLists')
  getJobs() {
    return this.jobListService.getJobLists();
  }

  @Get('/jobList/:id')
  getJob(@Param('id') id) {
    return this.jobListService.getJobList(id);
  }
}
