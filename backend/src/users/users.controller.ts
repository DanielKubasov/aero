import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

import {UsersService} from './users.service';

import {CreateUserDTO} from './dtos/createUser.dto';
import {UpdateUserDTO} from './dtos/updateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getAll() {
        return this.usersService.getAll();
    }

    @Get(':id')
    getOne(@Param() params) {
        return this.usersService.getOne(Number(params.id));
    }

    @Post()
    create(@Body() dto: CreateUserDTO) {
        return this.usersService.create(dto);
    }

    @Patch(':id')
    update(@Param() params, @Body() dto: UpdateUserDTO) {
        return this.usersService.update(Number(params.id), dto);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.usersService.delete(Number(params.id));
    }
}
