import { WebArticles } from './../../../entities/WebArticles';
import { Module } from '@nestjs/common';
import { HabillementproController } from './habillementpro.controller';
import { HabillementproService } from './habillementpro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([WebArticles]),
  ],
  controllers: [HabillementproController],
  providers: [HabillementproService]
})
export class HabillementproModule {}
