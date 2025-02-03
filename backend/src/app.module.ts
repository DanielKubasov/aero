import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {KnexModule} from 'nest-knexjs';

import {AppController} from './app.controller';
import {AppService} from './app.service';

import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        KnexModule.forRoot({
            config: {
                client: 'postgres',
                connection: {
                    host: process.env.DATABASE_HOST,
                    user: process.env.DATABASE_USER,
                    password: process.env.DATABASE_PASSWORD,
                    database: process.env.DATABASE_NAME,
                },
            },
        }),
        AuthModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
