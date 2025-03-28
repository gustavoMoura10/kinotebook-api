import { Body, Controller, Post } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';
import { BcryptPasswordPipe } from '../../pipes/bcrypt.password.pipe';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  @Post('register')
  async register(
    @Body() { password, ...registerDto }: RegisterDto,
    @Body('password', BcryptPasswordPipe) passwordHash: string,
  ) {
    return await this.authService.register({
      ...registerDto,
      password: passwordHash,
    });
  }
}
