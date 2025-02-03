import {Controller, Post} from '@nestjs/common';

import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/sign-in')
    signin() {
        return this.authService.signin();
    }

    @Post('/sign-up')
    signup() {
        return this.authService.signup();
    }
}
