import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../users/user.entity';

@Entity({ name: 'profiles' })
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')  // Gera automaticamente um UUID
  id: string;
  @Column({
    length: 50,
    name: 'first_name',
    nullable: false,
  })
  firstName: string;
  @Column({
    length: 50,
    name: 'last_name',
    nullable: false,
  })
  lastName: string;
  @Column({
    type: 'timestamp',
    nullable: false,
  })
  birthdate: Date;

  @Column({
    type: 'text',
    nullable: true,
  })
  bio: string;

  @OneToOne(() => UserEntity, (user) => user.profile, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
