import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ name: 'email', async: true })
export class EmailUnique implements ValidatorConstraintInterface {
  defaultMessage() {
    return 'Email Already exists';
  }
  async validate(email: string): Promise<boolean> {
    return false;
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
