import { InterfaceQuery } from './../helpers/interface.query';
import { GetUser } from './../get-user.decorator';
import { WebUsers } from './../../entities/WebUsers';
import { Controller, Get, Param, Put, Query, UseGuards, Body, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SpaceService } from './space.service';

@Controller('space')
@UseGuards(AuthGuard())
export class SpaceController {
    constructor(private srv: SpaceService) { }

    @Post('/search')
    getdata(@Query() query: InterfaceQuery, @Body() body: unknown, @GetUser() user: WebUsers): Promise<WebUsers[]> {
        return this.srv.getAll(body, query, user.refacteurWuser)
    }

    @Get('/filter')
    getdataFilter(@GetUser() user: WebUsers): Promise<unknown> {
        return this.srv.buildFilter(user.refacteurWuser)
    }

    @Get('/sites')
    getdataSites(@GetUser() user: WebUsers): Promise<unknown> {
        return this.srv.getSitesByRefActeur(user.refacteurWuser)
    }

    @Put('edit/:id')
    edit(@Param('id') id: number, @Body() user: WebUsers): Promise<unknown> {
        return this.srv.edit(id, user)
    }
}
