import { Injectable, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  //   @UseGuards(LocalAuthGuard)
  //   @Post('auth/login')
  //   async login(@(new Request()) req) {
  //     return req.user;
  //   }
}
