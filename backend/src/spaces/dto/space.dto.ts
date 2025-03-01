import {IsNotEmpty, IsNumber, IsString, Min} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateSpaceDTO {
    @ApiProperty()
    @IsNumber({}, {message: 'Id must be a number.'})
    @Min(1, {message: 'Id cannot be less than 1.'})
    @IsNotEmpty()
    user_id: number;

    @ApiProperty()
    @IsString({message: 'Name of the space must be a string.'})
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString({message: 'Description of the space must be a string.'})
    @IsNotEmpty()
    description: string;
}

export class UpdateSpaceDTO {
    @ApiProperty()
    @IsString({message: 'Name of the space must be a string.'})
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString({message: 'Description of the space must be a string.'})
    @IsNotEmpty()
    description: string;
}
