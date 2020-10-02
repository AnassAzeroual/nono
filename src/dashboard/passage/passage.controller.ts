import { PassageService } from './passage.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './../../get-user.decorator';

@Controller('passage')
@UseGuards(AuthGuard())
export class PassageController {
    constructor(private srv: PassageService) { }

    @Get()
    getPassage(@GetUser() user) {
        return this.srv.getPassages(user)
    }
}
