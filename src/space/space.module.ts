import { WebUsers } from './../../entities/WebUsers';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaceController } from './space.controller';
import { SpaceService } from './space.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([WebUsers]),
  ],
  controllers: [SpaceController],
  providers: [SpaceService]
})
export class SpaceModule { }
