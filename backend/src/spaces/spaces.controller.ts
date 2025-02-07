import {Body, Controller, Get, Post, Headers, Param, Patch, Delete} from '@nestjs/common';

import {AuthService} from '@/auth/auth.service';

import {SpacesService} from './spaces.service';
import {SpaceDTO} from './dto/space.dto';
import {AssignSpaceDTO} from './dto/assign-space.dto';

@Controller('spaces')
export class SpacesController {
    constructor(
        private spacesService: SpacesService,
        private authService: AuthService
    ) {}

    @Get()
    getAll() {
        return this.spacesService.getAll();
    }

    @Get('my-spaces')
    async getSpacesByUserId(@Headers('authorization') access_token: string) {
        const token = access_token.split(' ')[1];
        const user = await this.authService.verifyToken(token);

        return this.spacesService.getSpacesByUserId(String(user.id));
    }

    @Get(':id')
    getOne(@Param() params: any) {
        return this.spacesService.getOne(params.id as string);
    }

    @Post('assign')
    assignOne(@Body() dto: AssignSpaceDTO) {
        return this.spacesService.assignSpace(dto);
    }

    @Post()
    createOne(@Body() dto: SpaceDTO) {
        return this.spacesService.createOne(dto);
    }

    @Patch(':id')
    updateOne(@Param() params: any, @Body() dto: SpaceDTO) {
        return this.spacesService.updateOne(params.id as string, dto);
    }

    @Delete(':id')
    deleteOne(@Param() params: any) {
        return this.spacesService.deleteOne(params.id as string);
    }
}
