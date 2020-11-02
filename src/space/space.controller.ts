import { InterfaceQuery } from './../helpers/interface.query';
import { GetUser } from './../get-user.decorator';
import { WebUsers } from './../../entities/WebUsers';
import { Controller, Get, Param, Put, Query, UseGuards, Body } from '@nestjs/common';
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

    @Get('/sites')
    getdataSites(@GetUser() user: WebUsers): Promise<unknown> {
        return this.srv.getAllSites(user.refacteurWuser)
    }

    @Put('edit/:id')
    edit(@Param('id') id: number, @Body() user: WebUsers): Promise<unknown> {
        return this.srv.edit(id, user)
    }
}
