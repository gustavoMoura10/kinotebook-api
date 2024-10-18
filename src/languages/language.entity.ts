import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CountryEntity } from '../countries/country.entity';
import { MovieEntity } from '../movies/movie.entity';

@Entity('languages')
export class LanguageEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({
    length: 100,
    nullable: false,
  })
  name: string;

  @ManyToMany(() => CountryEntity, (country) => country.languages)
  @JoinTable({
    name: 'countries_languages',
    joinColumn: {
      name: 'language_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'country_id',
      referencedColumnName: 'id',
    },
  })
  countries: CountryEntity[];

  @ManyToMany(() => MovieEntity, (movie) => movie.languages)
  @JoinTable({
    name: 'movies_languages',
    joinColumn: {
      name: 'language_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id',
    },
  })
  movies: MovieEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
