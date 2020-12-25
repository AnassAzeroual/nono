import { HttpExceptionFilter } from './http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const allowedOrigins = [
    'http://localhost:4200',
    'https://auclair.000webhostapp.com',
    'http://localhost:3333',
    'http://localhost:80',
    'http://localhost',
    'http://app-a4c83ddb-89c0-4b9e-b544-048e0a6386fc.cleverapps.io'
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
