import {NestFactory} from '@nestjs/core';
import {RequestMethod, ValidationPipe} from '@nestjs/common';

import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

const LOCAL_PORT = process.env.NODE_LOCAL_PORT || 4000;
const DOCKER_PORT = process.env.NODE_DOCKER_PORT || 4000;

const MODE = process.env.NODE_ENV || 'DEFAULT';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    app.setGlobalPrefix('api', {
        exclude: [{path: 'health', method: RequestMethod.GET}],
    });

    const config = new DocumentBuilder()
        .setTitle('Aero')
        .setDescription('The API description')
        .setVersion('1.0')
        .addTag('')
        .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, documentFactory);

    await app.listen(DOCKER_PORT, () => {
        console.log(`The application has been started in ${MODE} mode.`);
        console.log(`Local port: ${LOCAL_PORT}, Docker port: ${DOCKER_PORT}`);
    });
}

bootstrap();
