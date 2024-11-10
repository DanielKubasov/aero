import {APP_GUARD} from '@nestjs/core';
import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';

import {UsersModule} from '../users/users.module';
import {PrismaModule} from '../prisma/prisma.module';

import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';

import {AuthGuard} from './guards/auth.guard';

@Module({
    imports: [UsersModule, PrismaModule, JwtModule],
    providers: [
        AuthService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
    ],
    controllers: [AuthController],
})
export class AuthModule {}
