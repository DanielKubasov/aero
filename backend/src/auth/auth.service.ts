import {BadRequestException, ConflictException, Injectable} from '@nestjs/common';

import {PrismaService} from '../prisma/prisma.service';
import {JwtService} from '@nestjs/jwt';

import {SignInDTO} from './dtos/signIn.dto';
import {SignUpDTO} from './dtos/signUp.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    async signIn(data: SignInDTO) {
        const user = await this.prisma.user.findUnique({
            where: {email: data.email},
        });

        if (user?.password !== data.password) {
            throw new BadRequestException('Passwords do not match');
        }

        const payload = {sub: user.id, username: user.username};
        const {password, ...userWithoutPassword} = user;

        return {
            access_token: await this.jwtService.signAsync(payload),
            user: userWithoutPassword,
        };
    }

    async signUp(data: SignUpDTO) {
        const user = await this.prisma.user.findUnique({
            where: {username: data.email},
        });

        if (user) {
            throw new ConflictException('User already exists');
        }

        return await this.prisma.user.create({data});
    }
}
