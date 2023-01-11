import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JobListModule } from './job-list/job-list.module';
import { JobDetailModule } from './job-detail/job-detail.module';

@Module({
  imports: [AuthModule, UsersModule, JobListModule, JobDetailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
