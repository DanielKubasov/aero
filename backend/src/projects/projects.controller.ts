import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

import {ProjectsService} from './projects.service';
import {CreateProjectDTO, UpdateProjectDTO} from './dto/project.dto';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    @Get()
    getAll() {
        return this.projectsService.getAll();
    }

    @Post()
    createOne(@Body() dto: CreateProjectDTO) {
        return this.projectsService.createOne(dto);
    }

    @Patch(':id')
    updateOne(@Param() params: any, @Body() dto: UpdateProjectDTO) {
        return this.projectsService.updateOne(params.id as string, dto);
    }

    @Delete(':id')
    deleteOne(@Param() params: any) {
        return this.projectsService.deleteOne(params.id as string);
    }
}
