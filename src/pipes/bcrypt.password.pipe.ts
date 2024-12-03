import { PipeTransform, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptPasswordPipe implements PipeTransform<string, Promise<string>> {
  private readonly saltRounds = 10;

  async transform(value: string): Promise<string> {
    if (!value) {
      throw new Error('No password provided');
    }
    const hashedPassword = await bcrypt.hash(value, this.saltRounds);
    return hashedPassword;
  }
}
