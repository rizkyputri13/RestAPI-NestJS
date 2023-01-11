import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { response } from 'express';
import { Observable, catchError, map } from 'rxjs';

@Injectable()
export class JobListService {
  // const response = this.httpService
  //   .get('https://abc.com/api/v2/branches')
  //   .pipe(
  //     map((response) => response.data),
  //     catchError((e) => {
  //       throw new HttpException(e.response.data, e.response.status);
  //     }),
  //   );
  // httpService: any;
  // return response;
}
