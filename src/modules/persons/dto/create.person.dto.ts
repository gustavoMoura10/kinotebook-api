import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString, Max, MaxLength } from 'class-validator';
import { validateAndParseDate } from '../../../utils/validateAndParseDate';

export class CreatePersonDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  fullName: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  nickname: string;

  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }) => validateAndParseDate(value))
  birthdate: Date;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => validateAndParseDate(value))
  deathdate: Date;

  @IsString()
  @IsNotEmpty()
  bio: string;

  @IsOptional()
  image: any;
  
  @IsOptional()
  homepage: string;
}
