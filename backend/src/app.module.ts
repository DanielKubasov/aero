import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt';
import {APP_GUARD} from '@nestjs/core';

import {KnexModule} from 'nest-knexjs';

import {AppController} from './app.controller';
import {AppService} from './app.service';

import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';

import {AuthGuard} from '@/auth/guards/auth.guard';
import {SpacesModule} from './spaces/spaces.module';
import {ProjectsModule} from './projects/projects.module';
import {TasksModule} from './tasks/tasks.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {expiresIn: '30m'},
        }),
        KnexModule.forRoot({
            config: {
                client: 'postgres',
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                },
            },
        }),
        AuthModule,
        UsersModule,
        SpacesModule,
        ProjectsModule,
        TasksModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
    ],
})
export class AppModule {}
