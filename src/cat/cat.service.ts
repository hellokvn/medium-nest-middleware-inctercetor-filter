import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getCat(): string {
    console.log('CatService/getCat');

    return 'meow';
  }
}
