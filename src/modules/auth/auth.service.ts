import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { profile } from 'console';
import { Repository } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { ProfileEntity } from '../profiles/profile.entity';
import RegisterDto from './dto/register.dto';
import { plainToClass } from 'class-transformer';
import LoginDto from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadInterface } from '../../interfaces/jwt.payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    @InjectRepository(ProfileEntity)
    private readonly profilesRepository: Repository<ProfileEntity>,
    private readonly jwtService: JwtService,
  ) {}
  getUserByEmail(email: string) {
    return this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }
  async register(registerDto: RegisterDto) {
    try {
      const { firstName, lastName, birthdate, bio, ...userData } = registerDto;
      const user = plainToClass(UserEntity, {
        ...userData,
      });
      const profile = plainToClass(ProfileEntity, {
        firstName,
        lastName,
        birthdate,
        bio,
      });
      const savedUser = await this.usersRepository.save(user);
      const savedProfile = await this.profilesRepository.save({
        ...profile,
        user: savedUser,
      });
      return {
        ...savedUser,
        profile: savedProfile,
      };
    } catch (error) {
      console.log(error);
    }
  }
  async login(@Body() loginDto: LoginDto) {
    const { emailOrUsername, password } = loginDto;
    const user = await this.usersRepository.findOne({
      where: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });
    if (!user) {
      throw new UnauthorizedException('Invalid email or username');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    const payload: JwtPayloadInterface = {
      sub: user.id,
      email: user.email,
      username: user.username,
    };
    return {
      token: await this.jwtService.signAsync(payload),
      user: payload,
    };
  }
}
