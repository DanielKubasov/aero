import {Injectable} from '@nestjs/common';

import {PrismaService} from '../prisma/prisma.service';

import {CreateUserDTO} from './dtos/createUser.dto';
import {UpdateUserDTO} from './dtos/updateUser.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
        return this.prisma.user.findMany();
    }

    async getOne(id: number) {
        return this.prisma.user.findUnique({
            where: {id},
        });
    }

    async getTasks(id: number) {
        return this.prisma.task.findMany({
            where: {
                assigneeId: id,
            },
        });
    }

    async create(data: CreateUserDTO) {
        return this.prisma.user.create({data});
    }

    async update(id: number, data: UpdateUserDTO) {
        return this.prisma.user.update({where: {id}, data});
    }

    async delete(id: number) {
        return this.prisma.user.delete({where: {id}});
    }
}
