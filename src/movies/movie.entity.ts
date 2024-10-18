import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReleaseEntity } from '../releases/release.entity';
import { CrewEntity } from '../crews/crew.entity';
import { CountryEntity } from '../countries/country.entity';
import {  LanguageEntity } from '../languages/language.entity';

@Entity('movies')
export class MovieEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({
    length: 250,
    nullable: false,
  })
  title: string;

  @OneToMany(() => ReleaseEntity, (release) => release.movie)
  releases: ReleaseEntity[];

  @Column({
    type: 'timestamp',
    nullable: true,
    name: 'official_release',
  })
  officialRelease: Date;

  @Column({
    type: 'text',
    nullable: true,
  })
  synopsis: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  description: string;

  @ManyToMany(() => CountryEntity, (country) => country.movies)
  @JoinTable({
    name: 'movies_countries',
    joinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'country_id',
      referencedColumnName: 'id',
    },
  })
  countries: CountryEntity[];

  @ManyToMany(() => LanguageEntity, (language) => language.movies)
  @JoinTable({
    name: 'movies_languages',
    joinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'language_id',
      referencedColumnName: 'id',
    },
  })
  languages:LanguageEntity[]

  @OneToMany(() => CrewEntity, (crew) => crew.movie)
  crews: CrewEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
