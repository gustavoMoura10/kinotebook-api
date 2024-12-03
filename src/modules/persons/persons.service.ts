import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create.person.dto';
import { UpdatePersonDto } from './dto/update.person.dto';
import { GoogleCloudStorageService } from '../google-cloud-storage/google.cloud.storage.service';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personsRepository: Repository<PersonEntity>,
    private readonly googleCloudStorageService: GoogleCloudStorageService,
  ) {}
  async create(createPersonDto: CreatePersonDto, file: Express.Multer.File) {
    let image: string | null = null;
    if (file) {
      image = await this.googleCloudStorageService.uploadFileImage(
        file.buffer,
        file.originalname,
        'persons',
      );
    }
    createPersonDto.image = image;
    let person = Object.assign(new PersonEntity(), createPersonDto);
    await this.personsRepository.save(person);
    return person;
  }

  async findAll() {
    return await this.personsRepository.find();
  }

  async findOne(id: string) {
    return await this.personsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updatePersonDto: UpdatePersonDto,
    file: Express.Multer.File,
  ) {
    const findPerson = await this.personsRepository.findOne({
      where: {
        id,
      },
    });
    if (!findPerson) {
      throw new NotFoundException(`Person with id ${id} not found`);
    }
    let image: string | null = updatePersonDto.image || null;
    if (file) {
      if (findPerson.image)
        await this.googleCloudStorageService.deleteFileImage(findPerson.image);
      image = await this.googleCloudStorageService.uploadFileImage(
        file.buffer,
        file.originalname,
        'persons',
      );
    }
    updatePersonDto.image = image;
    const person = Object.assign(findPerson, updatePersonDto);
    await this.personsRepository.update(id, person);
    return person;
  }

  async remove(id: string) {
    const person = await this.personsRepository.findOne({
      where: {
        id,
      },
    });
    if (!person) {
      throw new NotFoundException(`Person with id ${id} not found`);
    }
    await this.googleCloudStorageService.deleteFileImage(person.image);
    await this.personsRepository.update(id, {
      deletedAt: new Date(),
    });

    return person;
  }
}
