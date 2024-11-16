import {Injectable} from '@nestjs/common';

import {PrismaService} from '../prisma/prisma.service';

import {CreateTaskDTO} from './dtos/createTask.dto';
import {UpdateTaskDTO} from './dtos/updateTask.dto';

@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
        return this.prisma.task.findMany();
    }

    async getOne(id: number) {
        return this.prisma.task.findUnique({
            where: {id},
        });
    }

    async create(data: CreateTaskDTO) {
        return this.prisma.task.create({data});
    }

    async update(id: number, data: UpdateTaskDTO) {
        return this.prisma.task.update({where: {id}, data});
    }

    async delete(id: number) {
        return this.prisma.task.delete({where: {id}});
    }
}
