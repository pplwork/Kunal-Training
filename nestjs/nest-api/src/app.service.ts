import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(msg: string): string {
    return msg;
  }
}
