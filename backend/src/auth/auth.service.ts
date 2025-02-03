import {Injectable} from '@nestjs/common';

@Injectable()
export class AuthService {
    async signin(): Promise<string> {
        return 'Signin';
    }

    async signup(): Promise<string> {
        return 'Signup';
    }
}
