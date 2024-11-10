import {Injectable} from '@nestjs/common';

import {PrismaService} from '../prisma/prisma.service';

import {CreateTaskDTO} from './dtos/createTask.dto';
import {UpdateTaskDTO} from './dtos/updateTask.dto';

@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
        return await this.prisma.tasks;
    }

    async getOne(id: number) {
        return await this.prisma.tasks.findUnique({
            where: {id},
        });
    }

    async create(data: CreateTaskDTO) {
        return await this.prisma.tasks.create({data});
    }

    async update(id: number, data: UpdateTaskDTO) {
        return this.prisma.tasks.update({where: {id}, data});
    }

    async delete(id: number) {
        return this.prisma.tasks.delete({where: {id}});
    }
}
