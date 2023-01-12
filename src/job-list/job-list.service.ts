import { HttpService } from '@nestjs/axios/dist/http.service';
import { Injectable } from '@nestjs/common';
//import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class JobListService {
  constructor(private http: HttpService) {}

  getJobLists() {
    return this.http
      .get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
      .pipe(map((response) => response.data));
  }

  getJobList(id) {
    return this.http
      .get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json' + id)
      .pipe(map((response) => response.data));
  }
}
