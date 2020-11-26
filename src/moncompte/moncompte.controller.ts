import { MoncompteService } from './moncompte.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WebUsers } from 'entities/WebUsers';
import { GetUser } from 'src/get-user.decorator';

@Controller('moncompte')
@UseGuards(AuthGuard())
export class MoncompteController {
    constructor(private srv: MoncompteService) { }

    @Get()
    async getActeur(@GetUser() user: WebUsers): Promise<unknown> {
        const res = await this.srv.getActeurInfos(user.refacteurWuser)
        return { res }
    }
}
