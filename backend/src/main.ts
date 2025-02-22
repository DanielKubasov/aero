import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common';

import {AppModule} from './app.module';

const LOCAL_PORT = process.env.NODE_LOCAL_PORT || 4000;
const DOCKER_PORT = process.env.NODE_DOCKER_PORT || 4000;

const MODE = process.env.NODE_ENV || 'DEFAULT';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(DOCKER_PORT, () => {
        console.log(`The application has been started in ${MODE} mode.`);
        console.log(`Local port: ${LOCAL_PORT}, Docker port: ${DOCKER_PORT}`);
    });
}

bootstrap();
