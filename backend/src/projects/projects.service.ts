import {Injectable, NotFoundException} from '@nestjs/common';

import {InjectConnection} from 'nest-knexjs';
import {Knex} from 'knex';

import {CreateProjectDTO, UpdateProjectDTO} from './dto/project.dto';

import type {IProject} from './interfaces/project.interface';

import {SpacesService} from '@/spaces/spaces.service';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectConnection() private readonly knex: Knex,
        private spacesService: SpacesService
    ) {}

    async getAll(): Promise<IProject[]> {
        return this.knex('projects').select('*');
    }

    async getOne(id: string): Promise<IProject> {
        const [record] = await this.knex('projects').select('*').where('id', '=', id);

        if (!record) throw new NotFoundException(`Project with id = ${id} not found.`);

        return record;
    }

    async createOne(dto: CreateProjectDTO): Promise<IProject> {
        await this.spacesService.getOne(String(dto.space_id));

        const [space] = await this.knex('projects').insert(dto).returning('*');

        return space;
    }

    async updateOne(id: string, dto: UpdateProjectDTO): Promise<IProject> {
        await this.getOne(id);

        const [space] = await this.knex('projects')
            .update({
                name: dto.name,
                description: dto.description,
            })
            .where('id', '=', id)
            .returning('*');

        return space;
    }

    async deleteOne(id: string): Promise<IProject> {
        await this.getOne(id);

        const [space] = await this.knex('projects').delete().where('id', '=', id).returning('*');

        return space;
    }
}
