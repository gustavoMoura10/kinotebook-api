import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { FunctionEntity } from '../functions/function.entity';
import { MovieEntity } from '../movies/movie.entity';
import { CrewEntity } from '../crews/crew.entity';

@Entity('persons')
export class PersonEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({
    length: 150,
    nullable: false,
    name: 'full_name'
  })
  fullName: string;

  @Column({
    type: 'timestamp',
    nullable: false,      
  })
  birthdate: Date;

  @Column({
    type: 'timestamp',
    nullable: true,      
  })
  deathdate: Date;

  @Column({
    type: 'text',
    nullable: true,      
  })
  bio: string;

  @Column({
    length: 500,
    nullable: true,      
  })
  image: string;

  @Column({
    length: 500,
    nullable: true,      
  })
  homepage: string;

  @OneToMany(() => CrewEntity, (crew) => crew.person)
  crews: CrewEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
