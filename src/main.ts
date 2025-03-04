import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeederService } from './infrastructure/database/seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seeder = app.get(SeederService);
  await seeder.seed();

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();