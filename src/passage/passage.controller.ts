import { PassageService } from './passage.service';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('passage')
@UseGuards(AuthGuard())
export class PassageController {
    constructor(private srv: PassageService) { }

    @Get()
    getPassage(@Req() req) {
        return this.srv.getPassages(req)
    }
}
