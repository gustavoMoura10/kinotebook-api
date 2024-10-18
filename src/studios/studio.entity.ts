import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { CountryEntity } from '../countries/country.entity';

@Entity('studios')
export class StudioEntity {
  @PrimaryColumn('uuid')
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
  countries: CountryEntity[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
