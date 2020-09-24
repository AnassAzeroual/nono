import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const allowedOrigins = [
    'http://localhost:4200',
  ];

  const corsOptions = {
    origin: (origin, callback) => {
      console.log('=======>', origin);

      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    },
  };
  const app = await NestFactory.create(AppModule);
  app.enableCors({ ...corsOptions });
  await app.listen(3000);
}
bootstrap();
