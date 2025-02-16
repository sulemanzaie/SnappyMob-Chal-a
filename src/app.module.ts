import { Module } from '@nestjs/common';
import { GenerateFileService } from './generate-file.service';
import {ReadFileService} from "./read-file.service";

@Module({
  imports: [],
  controllers: [],
  providers: [GenerateFileService,ReadFileService],
})
export class AppModule {}
