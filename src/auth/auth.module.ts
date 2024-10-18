import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import UsersEntity from 'src/users/users.entity';
import ProfilesEntity from 'src/profiles/profiles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, ProfilesEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
