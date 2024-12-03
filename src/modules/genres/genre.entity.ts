import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MovieEntity } from '../movies/movie.entity';

@Entity('genres')
export class GenreEntity {
  @PrimaryGeneratedColumn('uuid')  // Gera automaticamente um UUID
  id: string;

  @Column({
    length: 100,
    nullable: false,
  })
  name: string;

  @ManyToMany(() => MovieEntity, (movie) => movie.genres)
  @JoinTable({
    name: 'movies_genres',
    joinColumn: {
      name: 'genre_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id',
    },
  })
  movies:MovieEntity[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
