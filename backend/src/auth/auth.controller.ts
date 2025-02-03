import {Body, Controller, Post} from '@nestjs/common';

import {AuthService} from './auth.service';

import {SignInDTO} from './dto/sign-in.dto';
import {SignUpDTO} from './dto/sign-up.dto';

import {Public} from '@/auth/decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @Post('/sign-in')
    signIn(@Body() dto: SignInDTO) {
        return this.authService.signIn(dto);
    }

    @Public()
    @Post('/sign-up')
    signUp(@Body() dto: SignUpDTO) {
        return this.authService.signUp(dto);
    }
}
