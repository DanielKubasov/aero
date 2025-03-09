import {
    BadRequestException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';

import {Knex} from 'knex';
import {InjectConnection} from 'nest-knexjs';
import {JwtService} from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import {UsersService} from '@/users/users.service';
import type {IUser} from '@/users/interfaces/user.interface';

import {SignInDTO} from './dto/sign-in.dto';
import {SignUpDTO} from './dto/sign-up.dto';

import type {AuthResponse} from './interfaces/auth-response.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @InjectConnection() private readonly knex: Knex
    ) {}

    async signIn(dto: SignInDTO): Promise<AuthResponse> {
        const user = await this.knex<IUser>('users').select('*').where('email', dto.email).first();

        if (!user) throw new NotFoundException('User not found.');

        const hash = await bcrypt.hash(dto.password, 10);

        if (user.password !== hash) throw new BadRequestException('Incorrect password.');

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
            first_name: user.first_name,
            last_name: user.last_name,
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async parseAuthorization(authorization: string): Promise<IUser> {
        const arr = authorization.split(' ');

        if (arr.length < 2) throw new BadRequestException('Invalid token.');

        const token = arr[1];

        if (!token) throw new BadRequestException('Invalid token.');

        return await this.verifyToken(token);
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
