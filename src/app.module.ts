import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JobDetailModule } from './job-detail/job-detail.module';
import { JobListController } from './job-list/job-list.controller';
import { JobListService } from './job-list/job-list.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [AuthModule, UsersModule, JobDetailModule, HttpModule],
  controllers: [AppController, JobListController],
  providers: [AppService, JobListService],
})
export class AppModule {}
