import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AuthService } from '../auth.service';

@Injectable()
@ValidatorConstraint({ name: 'email', async: true })
export class EmailUnique implements ValidatorConstraintInterface {
  constructor(private readonly authService: AuthService) {}
  defaultMessage() {
    return `Email already exists`;
  }
  async validate(email: string): Promise<boolean> {
    const user = await this.authService.getUserByEmail(email);

    return !user;
  }
}

export function IsEmailUnique(validationOptions?: any) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isEmailUnique',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: EmailUnique,
    });
  };
}
