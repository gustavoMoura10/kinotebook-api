import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly moviesRepository: Repository<MovieEntity>,
  ) {}
  create(createMovieDto) {
    return 'This action adds a new movie';
  }

  async findAll() {
    return await this.moviesRepository.find();
  }

  async findOne(id: string) {
    return await this.moviesRepository.find({
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
