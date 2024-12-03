import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MovieEntity } from '../movies/movie.entity';
import { StudioEntity } from '../studios/studio.entity';
import { LanguageEntity } from '../languages/language.entity';
import { ReleaseEntity } from '../releases/release.entity';


@Entity('countries')
export class CountryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    length: 3,
    nullable: false,
    unique: true,
  })
  code: string;

  @Column({
    length: 500,
    nullable: true,
  })
  flag: string;

  @ManyToMany(() => MovieEntity, (movie) => movie.countries)
  @JoinTable({
    name: 'movies_countries',
    joinColumn: {
      name: 'country_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id',
    },
  })
  movies: MovieEntity;

  @ManyToMany(() => StudioEntity, (studio) => studio.countries)
  @JoinTable({
    name: 'studios_countries',
    joinColumn: {
      name: 'country_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'studio_id',
      referencedColumnName: 'id',
    },
  })
  studios: StudioEntity[];

  @ManyToMany(() => LanguageEntity, (language) => language.countries)
  @JoinTable({
    name: 'countries_languages',
    joinColumn: {
      name: 'country_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'language_id',
      referencedColumnName: 'id',
    },
  })
  languages: LanguageEntity[];

  @OneToMany(() => ReleaseEntity, (release) => release.country)
  releases: ReleaseEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
  
}
