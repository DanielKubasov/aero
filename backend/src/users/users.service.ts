import {Injectable} from '@nestjs/common';

import {PrismaService} from '../prisma/prisma.service';

import {CreateUserDTO} from './dtos/createUser.dto';
import {UpdateUserDTO} from './dtos/updateUser.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
        return await this.prisma.users.findMany();
    }

    async getOne(id: number) {
        return await this.prisma.users.findUnique({
            where: {id},
        });
    }

    async create(data: CreateUserDTO) {
        return await this.prisma.users.create({data});
    }

    async update(id: number, data: UpdateUserDTO) {
        return this.prisma.users.update({where: {id}, data});
    }

    async delete(id: number) {
        return this.prisma.users.delete({where: {id}});
    }
}
