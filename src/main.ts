import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import * as ormConfig from './database/ormconfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
