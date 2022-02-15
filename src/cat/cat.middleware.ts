import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CatMiddleware implements NestMiddleware {
  public async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('CatMiddleware');

    next();
  }
}
