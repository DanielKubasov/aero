import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';

import {InjectConnection} from 'nest-knexjs';
import {Knex} from 'knex';

import * as bcrypt from 'bcrypt';

import {UserDTO} from './dto/user.dto';
import type {IUser} from './interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(@InjectConnection() private readonly knex: Knex<IUser>) {}

    async getAll(): Promise<IUser[]> {
        return this.knex('users').select(
            'id',
            'email',
            'username',
            'first_name',
            'last_name',
            'created_at',
            'updated_at'
        );
    }

    async getOne(id: string): Promise<Omit<IUser, 'password'>> {
        const user = await this.knex<Omit<IUser, 'password'>>('users')
            .select(
                'id',
                'email',
                'username',
                'first_name',
                'last_name',
                'created_at',
                'updated_at'
            )
            .where('id', '=', id)
            .first();

        if (!user) throw new NotFoundException(`User with id = ${id} not found.`);

        return user;
    }

    async createOne(dto: UserDTO): Promise<IUser> {
        const user = await this.getOneByEmail(dto.email);

        if (user) throw new BadRequestException('User with this email already exists.');

        const hash = await bcrypt.hash(dto.password, 10);

        const [newUser] = await this.knex('users')
            .insert({
                username: dto.username,
                email: dto.email,
                first_name: dto.first_name,
                last_name: dto.last_name,
                password: hash,
            })
            .returning('*');

        return newUser;
    }

    async updateOne(id: string, dto: UserDTO): Promise<IUser> {
        const [user] = await this.knex('users').update(dto).where('id', '=', id).returning('*');
        return user;
    }

    async deleteOne(id: string): Promise<IUser> {
        const [user] = await this.knex('users').delete().where('id', '=', id).returning('*');
        return user;
    }

    private async getOneByEmail(email: string): Promise<IUser | null> {
        const user = await this.knex('users').select('*').where('email', '=', email).first();

        if (!user) return null;

        return user;
    }
}
