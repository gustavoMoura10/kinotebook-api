import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CountryEntity } from '../countries/country.entity';
import { MovieEntity } from '../movies/movie.entity';

@Entity('studios')
export class StudioEntity {
  @PrimaryGeneratedColumn('uuid')  // Gera automaticamente um UUID
  id: string;

  @Column({
    length: 150,
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @ManyToMany(() => CountryEntity, (country) => country.studios)
  @JoinTable({
    name: 'studios_countries',
    joinColumn: {
      name: 'studio_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'country_id',
      referencedColumnName: 'id',
    },
  })
  countries: CountryEntity[];

  @ManyToMany(() => MovieEntity, (movie) => movie.studios)
  @JoinTable({
    name: 'movies_studios',
    joinColumn: {
      name: 'studio_id',
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
