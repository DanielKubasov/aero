import {NestFactory} from '@nestjs/core';

import {AppModule} from './app.module';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => console.log(`The application has been started on port: ${PORT}`));
}

bootstrap();
