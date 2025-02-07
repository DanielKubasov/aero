import {
    BadRequestException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';

import {UsersService} from '@/users/users.service';
import type {IUser} from '@/users/interfaces/user.interface';

import {SignInDTO} from './dto/sign-in.dto';
import {SignUpDTO} from './dto/sign-up.dto';

import type {AuthResponse} from './interfaces/auth-response.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(dto: SignInDTO): Promise<AuthResponse> {
        const user = await this.usersService.getOneByEmail(dto.email);

        if (!user) throw new NotFoundException('User not found.');

        if (user.password !== dto.password) throw new BadRequestException('Incorrect password.');

        const payload = {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async signUp(dto: SignUpDTO): Promise<AuthResponse> {
        const user = await this.usersService.createOne(dto);

        const payload = {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async verifyToken(token: string) {
        try {
            return this.jwtService.verifyAsync<IUser>(token);
        } catch (error: unknown) {
            console.log(error);
            throw new UnauthorizedException('Invalid access token.');
        }
    }
}
