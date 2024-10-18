import { Delete } from '@nestjs/common';

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProfileEntity } from '../profiles/profile.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn('uuid')
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

  @Column({ select: false, nullable: false, length: 255 })
  password: string;

  @OneToOne(() => ProfileEntity, (profile) => profile.user, {
    cascade: true,
  })
  profile: ProfileEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
