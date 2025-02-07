import {IsNotEmpty, IsNumber, Min} from "class-validator";

export class AssignSpaceDTO {
    @IsNumber()
    @Min(1, {message: 'Id must be greater than 0.'})
    @IsNotEmpty()
    space_id: number;

    @IsNumber()
    @Min(1, {message: 'Id must be greater than 0.'})
    @IsNotEmpty()
    user_id: number;
}
