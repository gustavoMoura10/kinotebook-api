import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsEmailUnique } from '../validation/email.validator';
import { IsMatchPassword } from '../validation/match.password.validator';
export default class RegisterDto {
  @IsString()
  @IsEmail()
  @IsEmailUnique()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsMatchPassword('password', { message: 'Passwords do not match' })
  confirmPassword: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  lastName: string;

  @IsDate()
  @IsNotEmpty()
  birthdate: Date;

  @IsString()
  @IsOptional()
  bio?: string;
}
