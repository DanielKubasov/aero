import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectConnection} from 'nest-knexjs';

import {Knex} from 'knex';

import type {ISpace} from './interfaces/space.interface';

import {SpaceDTO} from './dto/space.dto';
import {AssignSpaceDTO} from './dto/assign-space.dto';

import {UsersService} from '@/users/users.service';

@Injectable()
export class SpacesService {
    constructor(
        @InjectConnection() private readonly knex: Knex,
        private readonly usersService: UsersService
    ) {}

    async getAll(): Promise<ISpace[]> {
        return this.knex('spaces').select('*');
    }

    async getOne(id: string): Promise<ISpace> {
        const space = await this.knex('spaces').select('*').where('id', '=', id).first();

        if (!space) throw new NotFoundException(`Space with id = ${id} not found.`);

        return space;
    }

    async getSpacesByUserId(id: string) {
        const {rows} = await this.knex.raw(`
            SELECT spaces.id, spaces.owner_id, spaces.name, spaces.description, spaces.created_at, spaces.updated_at
            FROM user_spaces
                     INNER JOIN spaces ON user_spaces.user_id = spaces.id
            WHERE user_spaces.user_id = ${id}
        `);

        return rows;
    }

    async assignSpace(dto: AssignSpaceDTO): Promise<void> {
        await this.getOne(String(dto.space_id));
        await this.usersService.getOne(String(dto.user_id));

        await this.knex('user_spaces').insert(dto);
    }

    async createOne(dto: SpaceDTO): Promise<ISpace> {
        await this.usersService.getOne(String(dto.owner_id));

        const [space] = await this.knex('spaces').insert(dto).returning('*');

        return space;
    }

    async updateOne(id: string, dto: SpaceDTO): Promise<ISpace> {
        await this.getOne(id);
        await this.usersService.getOne(String(dto.owner_id));

        const [space] = await this.knex('spaces')
            .update(dto)
            .where('owner_id', '=', id)
            .returning('*');

        return space;
    }

    async deleteOne(id: string): Promise<ISpace> {
        await this.getOne(id);

        const [space] = await this.knex('spaces').delete().where('id', '=', id).returning('*');

        return space;
    }
}
