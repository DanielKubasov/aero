import {IsNotEmpty, IsNumber, IsString, Min} from 'class-validator';

export class SpaceDTO {
    @IsNumber({}, {message: 'Id must be a number.'})
    @Min(1, {message: 'Id cannot be less than 1.'})
    @IsNotEmpty()
    owner_id: number;

    @IsString({message: 'Name of the space must be a string.'})
    @IsNotEmpty()
    name: string;

    @IsString({message: 'Description of the space must be a string.'})
    @IsNotEmpty()
    description: string;
}
