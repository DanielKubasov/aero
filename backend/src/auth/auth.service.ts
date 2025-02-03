import {BadRequestException, Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';

import {UsersService} from '@/users/users.service';

import {SignInDTO} from './dto/sign-in.dto';
import {SignUpDTO} from './dto/sign-up.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(dto: SignInDTO) {
        const user = await this.usersService.getOneByEmail(dto.email);

        if (user.password !== dto.password) throw new BadRequestException('Incorrect password.');

        const payload = {
            sub: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async signUp(dto: SignUpDTO): Promise<string> {
        return 'Signup';
    }
}
