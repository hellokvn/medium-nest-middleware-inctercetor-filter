import { Controller, Get, HttpException, HttpStatus, Inject, UseFilters, UseInterceptors } from '@nestjs/common';
import { CatHttpExceptionFilter } from './cat.filter';
import { CatInterceptor } from './cat.interceptor';
import { CatService } from './cat.service';

@Controller('cat')
@UseInterceptors(CatInterceptor)
export class CatController {
  @Inject(CatService)
  public service: CatService;

  @Get()
  public getCat(): string {
    console.log('CatController/getCat GET');

    return this.service.getCat();
  }

  @Get('forbidden')
  public throwForbbidenError(): never {
    console.log('CatController/throwForbbidenError GET');

    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('conflict')
  @UseFilters(new CatHttpExceptionFilter())
  public throwConflictError(): never {
    console.log('CatController/throwConflictError GET');

    throw new HttpException('Conflict', HttpStatus.CONFLICT);
  }
}
