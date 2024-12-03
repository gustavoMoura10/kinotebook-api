import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create.country.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('countries')
@UseGuards(AuthGuard)
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    const country = this.countriesService.create(createCountryDto);
    return {
      message: 'Country created successfully',
      body: country,
    };
  }

  @Get()
  async findAll() {
    const countries = await this.countriesService.findAll();
    return {
      message: 'Country created successfully',
      body: countries,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countriesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCountryDto) {
    return this.countriesService.update(+id, updateCountryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countriesService.remove(+id);
  }
}
