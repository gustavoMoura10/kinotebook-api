import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export default class LoginDto {
  @IsString()
  @IsNotEmpty()
  emailOrUsername: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}
