import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CountryEntity } from '../countries/country.entity';
import { MovieEntity } from '../movies/movie.entity';

@Entity('releases')
export class ReleaseEntity {
  @PrimaryGeneratedColumn('uuid')  // Gera automaticamente um UUID
  id: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  date: Date;
  @ManyToOne(() => CountryEntity, (country) => country.releases, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;

  @ManyToOne(() => MovieEntity, (movie) => movie.releases, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'movie_id' })
  movie: MovieEntity;
}
