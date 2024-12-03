import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

// Define o validador
@ValidatorConstraint({ async: false })
export class MatchPasswordValidator implements ValidatorConstraintInterface {
  validate(confirmPassword: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const password = (args.object as any)[relatedPropertyName];
    return confirmPassword === password; // Retorna true se as senhas forem iguais
  }

  defaultMessage(args: ValidationArguments) {
    return 'Confirm password must match the password';
  }
}

// Cria o decorator customizado
export function IsMatchPassword(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: MatchPasswordValidator,
    });
  };
}
