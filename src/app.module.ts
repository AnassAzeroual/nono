import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PassageModule } from './dashboard/passage/passage.module';
import { FonctionnelleInfosModule } from './dashboard/fonctionnelle-infos/fonctionnelle-infos.module';
import { HabillementproModule } from './prestations/habillementpro/habillementpro.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    PassageModule,
    FonctionnelleInfosModule,
    HabillementproModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule { }
