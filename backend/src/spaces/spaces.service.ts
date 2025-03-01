import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectConnection} from 'nest-knexjs';

import {Knex} from 'knex';

import type {ISpace} from './interfaces/space.interface';

import {CreateSpaceDTO, UpdateSpaceDTO} from './dto/space.dto';
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

    async getSpacesByUserId(user_id: string) {
        const spacc = await this.knex('user_spaces').select('*');

        console.log(spacc);
        console.log(user_id);

        return this.knex('user_spaces')
            .join('spaces', 'user_spaces.space_id', 'spaces.id')
            .select(
                'spaces.id',
                'spaces.name',
                'spaces.description',
                'spaces.created_at',
                'spaces.updated_at'
            )
            .where('user_spaces.user_id', user_id);
    }

    async createOne(dto: CreateSpaceDTO): Promise<ISpace> {
        await this.usersService.getOne(String(dto.user_id));

        return this.knex.transaction(async trx => {
            const [space] = await this.knex('spaces')
                .insert({
                    name: dto.name,
                    description: dto.description,
                })
                .transacting(trx)
                .returning('*');

            await this.knex('user_spaces')
                .insert({
                    user_id: dto.user_id,
                    space_id: space.id,
                })
                .transacting(trx);

            return space;
        });
    }

    async updateOne(id: string, dto: UpdateSpaceDTO): Promise<ISpace> {
        await this.getOne(id);

        const [space] = await this.knex('spaces')
            .update({
                name: dto.name,
                description: dto.description,
            })
            .where('id', '=', id)
            .returning('*');

        return space;
    }

    async deleteOne(id: string): Promise<ISpace> {
        await this.getOne(id);

        const [space] = await this.knex('spaces').delete().where('id', '=', id).returning('*');

        return space;
    }

    async assignOne(dto: AssignSpaceDTO): Promise<void> {
        await this.getOne(String(dto.space_id));
        await this.usersService.getOne(String(dto.user_id));

        await this.knex('user_spaces').insert({
            user_id: dto.user_id,
            space_id: dto.space_id,
        });
    }
}
