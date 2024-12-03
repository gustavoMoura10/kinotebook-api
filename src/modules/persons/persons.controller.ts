import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  InternalServerErrorException,
} from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create.person.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { GoogleCloudStorageService } from '../google-cloud-storage/google.cloud.storage.service';
import { UpdatePersonDto } from './dto/update.person.dto';

@Controller('persons')
export class PersonsController {
  constructor(
    private readonly personsService: PersonsService,
    private readonly googleCloudStorageService: GoogleCloudStorageService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createPerson(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      const person = await this.personsService.create(createPersonDto, file);
      return {
        message: 'Person created successfully',
        body: person,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Error creating person: ${error.message}`,
      );
    }
  }

  @Get()
  async findAll() {
    const persons = await this.personsService.findAll();
    return {
      message: 'Persons found successfully',
      body: persons,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const person = await this.personsService.findOne(id);
    return {
      message: 'Persons found successfully',
      body: person,
    };
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string,
    @Body() updatePersonDto: UpdatePersonDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const person = await this.personsService.update(id, updatePersonDto, file);
    return {
      message: 'Persons found successfully',
      body: person,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const person = await this.personsService.remove(id);
    return {
      message: 'Persons found successfully',
      body: person,
    };
  }
}
