import {
    Body,
    Controller,
    Get,
    Post,
    Headers,
    Param,
    Patch,
    Delete,
    BadRequestException,
} from '@nestjs/common';

import {AuthService} from '@/auth/auth.service';

import {SpacesService} from './spaces.service';
import {AssignSpaceDTO} from './dto/assign-space.dto';
import {CreateSpaceDTO, UpdateSpaceDTO} from '@/spaces/dto/space.dto';

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

    @Get('my')
    async getSpacesByUserId(@Headers('authorization') authorization: string) {
        const user = await this.authService.parseAuthorization(authorization);

        return this.spacesService.getSpacesByUserId(String(user.id));
    }

    @Get(':id')
    getOne(@Param() params: any) {
        return this.spacesService.getOne(params.id as string);
    }

    @Post()
    createOne(@Body() dto: CreateSpaceDTO) {
        return this.spacesService.createOne(dto);
    }

    @Patch(':id')
    updateOne(@Param() params: any, @Body() dto: UpdateSpaceDTO) {
        return this.spacesService.updateOne(params.id as string, dto);
    }

    @Delete(':id')
    deleteOne(@Param() params: any) {
        return this.spacesService.deleteOne(params.id as string);
    }

    @Post('assign')
    assignOne(@Body() dto: AssignSpaceDTO) {
        return this.spacesService.assignOne(dto);
    }
}
