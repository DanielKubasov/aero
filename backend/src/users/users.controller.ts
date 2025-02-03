import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

import {UsersService} from './users.service';
import {UserDTO} from './dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getAll() {
        return this.usersService.getAll();
    }

    @Get(':id')
    getOne(@Param() params) {
        return this.usersService.getOne(params.id);
    }

    @Post()
    createOne(@Body() dto: UserDTO) {
        return this.usersService.createOne(dto);
    }

    @Patch(':id')
    updateOne(@Param() params, @Body() dto: UserDTO) {
        return this.usersService.updateOne(params.id, dto);
    }

    @Delete(':id')
    deleteOne(@Param() params) {
        return this.usersService.deleteOne(params.id);
    }
}
