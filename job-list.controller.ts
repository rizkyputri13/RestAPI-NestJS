import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Post('/findJob')
  async getSearch(@Body() fields: any) {
    const desc = fields.description.toLowerCase();
    const loc = fields.location.toLowerCase();
    return this.jobListService.findJob(desc, loc);
  }
}
