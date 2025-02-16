import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Buffer } from 'buffer';

@Injectable()
export class GenerateFileService {
  private readonly filePath = path.join(__dirname, 'random_data.txt');
  private readonly fileSize = 10 * 1024 * 1024;

  private generateRandomAlphabeticalString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  private generateRandomInteger(): number {
    return Math.floor(Math.random() * 1000000);
  }

  private generateRandomRealNumber(): number {
    return parseFloat((Math.random() * 1000).toFixed(5));
  }

  private generateRandomAlphanumeric(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = Math.floor(Math.random() * 10) + 5;
    const randomString = Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    const spacesBefore = ' '.repeat(Math.floor(Math.random() * 10));
    const spacesAfter = ' '.repeat(Math.floor(Math.random() * 10));
    return `${spacesBefore}${randomString}${spacesAfter}`;
  }

  generateFile(): void {
    const stream = fs.createWriteStream(this.filePath);
    let fileSize = 0;
    while (fileSize < this.fileSize) {
      const data = [
        this.generateRandomAlphabeticalString(10),
        this.generateRandomRealNumber(),
        this.generateRandomInteger(),
        this.generateRandomAlphanumeric()
      ].join(',') + ',';
      stream.write(data);
      fileSize += Buffer.byteLength(data);
    }
    stream.end();
  }
}


