import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ReadFileService} from "./read-file.service";

async function readProcessedFile() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const appService = app.get(ReadFileService);
  appService.readAndProcessFile();
  console.log('Data read and processed successfully');
  await app.close();
}

readProcessedFile().then();
