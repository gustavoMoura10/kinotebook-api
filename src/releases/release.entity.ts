import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { CountryEntity } from '../countries/country.entity';
import { MovieEntity } from '../movies/movie.entity';

@Entity('releases')
export class ReleaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  date: Date;
  @ManyToOne(() => CountryEntity, (country) => country.releases, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;

  @ManyToOne(() => MovieEntity, (movie) => movie.releases, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'movie_id' })
  movie: MovieEntity;
}
