import { HttpService } from '@nestjs/axios/dist/http.service';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class JobListService {
  [x: string]: any;
  constructor(private http: HttpService) {}

  async getJobLists() {
    const { data } = await firstValueFrom(
      this.http.get(
        'http://dev3.dansmultipro.co.id/api/recruitment/positions.json',
      ),
    );
    return data;
  }

  async getJobList(id) {
    const { data } = await firstValueFrom(
      this.http.get(
        'http://dev3.dansmultipro.co.id/api/recruitment/positions.json' + id,
      ),
    );
    return data;
  }

  async findJob(desc: string, loc: string) {
    const { data } = await firstValueFrom(
      this.http.get(
        'http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=' +
          desc +
          '&location=' +
          loc,
      ),
    );
    return data;
  }
}
