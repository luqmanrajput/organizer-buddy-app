import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGurad } from './auth/guard/jwt.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new JwtAuthGurad());
  await app.listen(3000);
}
bootstrap();
