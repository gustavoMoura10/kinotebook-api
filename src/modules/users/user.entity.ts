import { Delete } from '@nestjs/common';

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReviewEntity } from '../reviews/review.entity';
import { ProfileEntity } from '../profiles/profile.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')  // Gera automaticamente um UUID
  id: string;

  @Column({
    unique: true,
    length: 50,
    nullable: false,
  })
  username: string;

  @Column({
    unique: true,
    length: 100,
    nullable: false,
  })
  email: string;

  @Exclude()
  @Column({ nullable: false, length: 255 })
  password: string;

  @OneToOne(() => ProfileEntity, (profile) => profile.user, {
    cascade: true,
  })
  profile: ProfileEntity;

  @OneToMany(() => ReviewEntity, (review) => review.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  reviews?: ReviewEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
