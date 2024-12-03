import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenreEntity } from './genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenresService {

  constructor(
    @InjectRepository(GenreEntity)
    private readonly genresRepository: Repository<GenreEntity>,
  ) {}
  

}
