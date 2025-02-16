import * as fs from 'fs';
import * as path from 'path';
import {Injectable} from "@nestjs/common";

@Injectable()
export class ReadFileService {

  private detectType(value: string): string {
    if (/^-?\d+\.\d+$/.test(value)) {
      return 'Real Number';
    } else if (/^-?\d+$/.test(value)) {
      return 'Integer';
    } else if (/^[A-Za-z]+$/.test(value)) {
      return 'Alphabetical String';
    } else {
      return 'Alphanumeric String';
    }
  }

  readAndProcessFile(): void {
    const filePath = path.join(__dirname, 'random_data.txt');
    const data = fs.readFileSync(filePath, 'utf8');

    const objects = data.split(',');

    for (const obj of objects) {
      const trimmedObj = obj.trim(); // Remove spaces around alphanumeric strings
      if (trimmedObj) {
        console.log(`Value: ${trimmedObj}, Type: ${this.detectType(trimmedObj)}`);
      }
    }
  }
}
