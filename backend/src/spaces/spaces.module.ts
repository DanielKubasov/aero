import {Module} from '@nestjs/common';

import {SpacesController} from './spaces.controller';
import {SpacesService} from './spaces.service';

import {UsersModule} from '@/users/users.module';
import {AuthModule} from '@/auth/auth.module';

@Module({
    imports: [UsersModule, AuthModule],
    controllers: [SpacesController],
    providers: [SpacesService],
    exports: [SpacesService]
})
export class SpacesModule {}
