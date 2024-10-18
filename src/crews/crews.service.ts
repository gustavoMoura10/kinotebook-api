import { Injectable } from '@nestjs/common';


@Injectable()
export class CrewsService {
  create(createCrewDto) {
    return 'This action adds a new crew';
  }

  findAll() {
    return `This action returns all crews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crew`;
  }

  update(id: number, updateCrewDto) {
    return `This action updates a #${id} crew`;
  }

  remove(id: number) {
    return `This action removes a #${id} crew`;
  }
}
