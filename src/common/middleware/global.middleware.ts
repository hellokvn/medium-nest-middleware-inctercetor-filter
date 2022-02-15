import { Request, Response, NextFunction } from 'express';

export function GlobalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('GlobalMiddleware');

  next();
}
