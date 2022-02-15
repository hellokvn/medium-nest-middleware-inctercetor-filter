import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('AppService/getHello');

    return 'Hello World!';
  }
}
