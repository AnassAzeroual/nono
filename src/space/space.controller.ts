import { InterfaceQuery } from './../helpers/interface.query';
import { GetUser } from './../get-user.decorator';
import { WebUsers } from './../../entities/WebUsers';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SpaceService } from './space.service';

@Controller('space')
@UseGuards(AuthGuard())
export class SpaceController {
    constructor(private srv: SpaceService) { }

    @Get('/search')
    getdataFilter(@Query() query: InterfaceQuery, @GetUser() user: WebUsers): Promise<WebUsers[]> {
        return this.srv.getAll(query, user.refacteurWuser)
    }
}
