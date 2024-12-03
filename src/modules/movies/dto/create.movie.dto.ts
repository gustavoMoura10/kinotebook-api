import { Transform } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsUUID,
    IsArray,
    IsDateString,
    MaxLength,
  } from 'class-validator';
import { validateAndParseDate } from '../../../utils/validateAndParseDate';
  
  export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(250)
    title: string;
  
    @IsDateString()
    @IsNotEmpty()
    @Transform(({ value }) => validateAndParseDate(value))
    officialRelease?: Date;
  
    @IsOptional()
    @IsString()
    synopsis?: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @IsArray()
    @IsUUID('all', { each: true })
    @IsOptional()
    countries?: string[]; // IDs dos países relacionados
  
    @IsArray()
    @IsUUID('all', { each: true })
    @IsOptional()
    languages?: string[]; // IDs dos idiomas relacionados
  
    @IsArray()
    @IsUUID('all', { each: true })
    @IsOptional()
    genres?: string[]; // IDs dos gêneros relacionados
  
    @IsArray()
    @IsUUID('all', { each: true })
    @IsOptional()
    studios?: string[]; // IDs dos estúdios relacionados
  }
  