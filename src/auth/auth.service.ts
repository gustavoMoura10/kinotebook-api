import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { profile } from 'console';
import { Repository } from 'typeorm';
import UserEntity from '../users/user.entity';
import ProfileEntity from '../profiles/profile.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    @InjectRepository(ProfileEntity)
    private readonly profilesRepository: Repository<ProfileEntity>,
  ) {}
  async register(userEntity: UserEntity, personEntity: ProfileEntity) {
    try {
      const user = await this.usersRepository.save(userEntity);
      const profile = await this.profilesRepository.save({
        ...personEntity,
        user,
      });
      return {
        ...user,
        profile,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
