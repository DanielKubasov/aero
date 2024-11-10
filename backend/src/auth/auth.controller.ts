import {Body, Controller, Post} from '@nestjs/common';

import {SignInDTO} from './dtos/signIn.dto';
import {SignUpDTO} from './dtos/signUp.dto';

import {AuthService} from './auth.service';

import {Public} from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @Post('sign-in')
    signIn(@Body() dto: SignInDTO) {
        return this.authService.signIn(dto);
    }

    @Public()
    @Post('sign-up')
    signUp(@Body() dto: SignUpDTO) {
        return this.authService.signUp(dto);
    }
}
