import { Injectable } from '@nestjs/common';
import { LanguageEntity } from './language.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class LanguagesService {
  constructor(
    @InjectRepository(LanguageEntity)
    private readonly languagesRepository: Repository<LanguageEntity>,
  ) {}
  create(createLanguageDto) {
    return 'This action adds a new language';
  }

  async findAll() {
    return await this.languagesRepository.find();
  }

  async findOne(id: string) {
    return await this.languagesRepository.find({
      where: {
        id,
      },
    });
  }

  update(id: string, updateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: string) {
    return `This action removes a #${id} language`;
  }
}
