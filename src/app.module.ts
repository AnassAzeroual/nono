import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PassageModule } from './passage/passage.module';
import { FonctionnelleInfosModule } from './fonctionnelle-infos/fonctionnelle-infos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    PassageModule,
    FonctionnelleInfosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
