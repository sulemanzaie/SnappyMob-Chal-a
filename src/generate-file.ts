import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GenerateFileService } from './generate-file.service';

async function generateFile() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const appService = app.get(GenerateFileService);
  appService.generateFile();
  console.log('Random data file generated successfully!');
  await app.close();
}
generateFile().then();
