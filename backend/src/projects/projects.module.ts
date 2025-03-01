import {Module} from '@nestjs/common';
import {ProjectsController} from './projects.controller';
import {ProjectsService} from './projects.service';

import {SpacesModule} from '@/spaces/spaces.module';

@Module({
    imports: [SpacesModule],
    controllers: [ProjectsController],
    providers: [ProjectsService],
})
export class ProjectsModule {}
