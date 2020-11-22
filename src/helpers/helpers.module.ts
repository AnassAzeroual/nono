import { WebActeursSites } from './../../entities/WebActeursSites';
import { HelpersService } from './helpers.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([WebActeursSites]),],
    exports: [HelpersService],
    providers: [HelpersService],
})
export class HelpersModule { }
