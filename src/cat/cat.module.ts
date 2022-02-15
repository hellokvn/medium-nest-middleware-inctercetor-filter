import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatMiddleware } from './cat.middleware';
import { CatService } from './cat.service';

@Module({
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CatMiddleware).forRoutes('/cat');
  }
}
