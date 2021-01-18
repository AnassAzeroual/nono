import { HttpExceptionFilter } from './http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const allowedOrigins = [
    'http://localhost:4200',
    'https://auclair.000webhostapp.com',
    'http://app-e7143e66-c3d8-4044-9682-3b4b7a337d91.cleverapps.io/',
    'http://app-f8b830eb-c75c-40f2-9eeb-4ff927bd5d95.cleverapps.io/'
  ];

  const corsOptions = {
    origin: (origin, callback) => {
      console.log(origin);
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    },
  };
  app.enableCors({ ...corsOptions });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
