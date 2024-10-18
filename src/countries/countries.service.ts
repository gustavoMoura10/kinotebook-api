import { Injectable } from '@nestjs/common';

@Injectable()
export class CountriesService {
  create(createCountryDto) {
    return 'This action adds a new country';
  }

  findAll() {
    return `This action returns all countries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
