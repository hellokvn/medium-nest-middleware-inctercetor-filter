import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filter/global.filter';
import { GlobalInterceptor } from './common/interceptor/global.interceptor';
import { GlobalMiddleware } from './common/middleware/global.middleware';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new GlobalInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(GlobalMiddleware);

  await app.listen(3000);
}
bootstrap();
