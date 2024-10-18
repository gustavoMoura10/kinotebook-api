import { Body, Controller, Post } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return 'login';
  }
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    
    return 'register';
  }
}
