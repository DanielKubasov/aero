import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

import {TasksService} from './tasks.service';

import {CreateTaskDTO} from './dtos/createTask.dto';
import {UpdateTaskDTO} from './dtos/updateTask.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAll() {
        return this.tasksService.getAll();
    }

    @Get(':id')
    getOne(@Param() params) {
        return this.tasksService.getOne(Number(params.id));
    }

    @Post()
    create(@Body() dto: CreateTaskDTO) {
        return this.tasksService.create(dto);
    }

    @Patch(':id')
    update(@Param() params, @Body() dto: UpdateTaskDTO) {
        return this.tasksService.update(Number(params.id), dto);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.tasksService.delete(Number(params.id));
    }
}
