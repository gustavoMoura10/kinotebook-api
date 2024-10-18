import { Injectable } from '@nestjs/common';
@Injectable()
export class LanguagesService {
  create(createLanguageDto) {
    return 'This action adds a new language';
  }

  findAll() {
    return `This action returns all languages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} language`;
  }

  update(id: number, updateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
