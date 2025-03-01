import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsNumber, IsString, Min} from 'class-validator';

export class CreateProjectDTO {
    @ApiProperty()
    @IsNumber()
    @Min(1, {message: 'Id must be greater than 0.'})
    @IsNotEmpty()
    space_id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
}

export class UpdateProjectDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
}
