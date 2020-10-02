import { Controller, Get, Ip, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './../../get-user.decorator';
import { FonctionnelleInfosService } from './fonctionnelle-infos.service';

@Controller('fonctionnelle-infos')
@UseGuards(AuthGuard())
export class FonctionnelleInfosController {
    constructor(private srv: FonctionnelleInfosService) { }

    @Get()
    getPassage(@Ip() Ip, @GetUser() user) {
        console.log(Ip);
        return this.srv.get(user)
    }
}
