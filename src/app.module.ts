import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PassageModule } from './passage/passage.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    PassageModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
