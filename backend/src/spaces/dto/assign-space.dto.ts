import {IsNotEmpty, IsNumber, Min} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class AssignSpaceDTO {
    @ApiProperty()
    @IsNumber()
    @Min(1, {message: 'Id must be greater than 0.'})
    @IsNotEmpty()
    space_id: number;

    @ApiProperty()
    @IsNumber()
    @Min(1, {message: 'Id must be greater than 0.'})
    @IsNotEmpty()
    user_id: number;
}
