import { Injectable } from '@nestjs/common';

@Injectable()
export class FunctionsService {
  create(createFunctionDto) {
    return 'This action adds a new function';
  }

  findAll() {
    return `This action returns all functions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} function`;
  }

  update(id: number, updateFunctionDto) {
    return `This action updates a #${id} function`;
  }

  remove(id: number) {
    return `This action removes a #${id} function`;
  }
}
