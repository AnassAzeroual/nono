import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { FonctionnelleInfosService } from './fonctionnelle-infos.service';

@Controller('fonctionnelle-infos')
@UseGuards(AuthGuard())
export class FonctionnelleInfosController {
    constructor(private srv: FonctionnelleInfosService) { }

    @Get()
    getPassage(@GetUser() user) {
        return this.srv.get(user)
    }
}
