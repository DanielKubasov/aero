import {Body, Controller, Post} from '@nestjs/common';

import {SignInDTO} from './dtos/signIn.dto';
import {SignUpDTO} from './dtos/signUp.dto';

import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('sign-in')
    signIn(@Body() dto: SignInDTO) {
        return this.authService.signIn(dto);
    }

    @Post('sign-up')
    signUp(@Body() dto: SignUpDTO) {
        return this.authService.signUp(dto);
    }
}
