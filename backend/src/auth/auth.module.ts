import {Module} from '@nestjs/common';

import {UsersModule} from '../users/users.module';
import {PrismaModule} from '../prisma/prisma.module';

import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';

@Module({
    imports: [UsersModule, PrismaModule],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
