import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create.country.dto';
import { CountryEntity } from './country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countrysRepository: Repository<CountryEntity>,
  ) {}
  create(createCountryDto: CreateCountryDto) {
    const country = new CountryEntity();
    country.name = createCountryDto.name;
    country.code = createCountryDto.code;
    const countrySaved = this.countrysRepository.save(country);
    return countrySaved;
  }

  async findAll() {
    return await this.countrysRepository.find();
  }

  async findOne(id: string) {
    return await this.countrysRepository.find({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
