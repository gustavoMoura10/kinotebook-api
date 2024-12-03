import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryEntity } from './country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  providers: [CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}
