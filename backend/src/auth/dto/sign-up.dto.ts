import {IsEmail, IsNotEmpty, IsString, Length} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class SignUpDTO {
    @ApiProperty()
    @IsString({message: 'username must be a string.'})
    @Length(2, 64, {message: 'username must contain between 2 to 24 characters.'})
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsString()
    @Length(8, 24, {message: 'Password must contain between 8 to 24 characters.'})
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsString()
    @IsEmail({}, {message: 'Incorrect email.'})
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString({message: 'first_name must be a string.'})
    @Length(2, 64, {message: 'first_name must contain between 2 to 64 characters.'})
    @IsNotEmpty()
    first_name: string;

    @ApiProperty()
    @IsString({message: 'last_name must be a string.'})
    @Length(2, 64, {message: 'last_name must contain between 2 to 64 characters.'})
    @IsNotEmpty()
    last_name: string;
}
