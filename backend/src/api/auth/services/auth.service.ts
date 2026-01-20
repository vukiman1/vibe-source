import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { Response } from 'express';
import { RegisterDto } from '../dto/register.dto';
import { CryptoService } from '@app/crypto';
import { UserEntity } from 'src/api/user/entities/user.entity';
import { JwtService } from '@app/jwt';
import { UserService } from 'src/api/user/user.service';
import { SetCookieRFToken } from '@app/helpers/setCookieRFToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  findAll() {
    return {
      message: 'Auth me',
    };
  }
  async login(user: UserEntity, response: Response) {
    const { id } = user;
    const payload = { id };
    // // Generate accessToken
    const accessToken = await this.jwtService.signJwt(payload);
    const refreshToken = await this.jwtService.signJwt(payload, true);

    // // Cache token
    // this.redisService.setRefreshToken(id, refreshToken);
    // this.redisService.setAccessToken(id, accessToken);

    // // Encrypt cookie
    const encryptId = this.cryptoService.encryptData(id);
    SetCookieRFToken(response, encryptId);
    const result = { user, accessToken, refreshToken };
    return result;
  }

  async register({ email, password, confirmPassword }: RegisterDto) {
    if (password !== confirmPassword) {
      throw new BadRequestException(
        'Password and confirm password do not match',
      );
    }
    const existingUser = await this.userService.getOne({ email });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
    await this.userService.create({
      email,
      password,
    });

    return {
      message: 'User registered successfully',
      email,
    };
  }
}
