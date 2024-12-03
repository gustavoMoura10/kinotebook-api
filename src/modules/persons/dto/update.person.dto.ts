import { Transform } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';
import { validateAndParseDate } from '../../../utils/validateAndParseDate';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './create.person.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
  @IsOptional()
  id: string;

  @IsOptional()
  fullName: string;

  @IsOptional()
  @Transform(({ value }) => validateAndParseDate(value))
  birthdate: Date;

  @IsOptional()
  bio: string;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;

}
