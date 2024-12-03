import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrewEntity } from './crew.entity';

@Injectable()
export class CrewsService {
  constructor(
    @InjectRepository(CrewEntity)
    private readonly crewsRepository: Repository<CrewEntity>,
  ) {}
  create(createMovieDto) {
    return 'This action adds a new movie';
  }

  async findAll() {
    return await this.crewsRepository.find();
  }

  async findOne(id: string) {
    return await this.crewsRepository.find({
      where: {
        id,
      },
    });
  }

  update(id: number, updateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
