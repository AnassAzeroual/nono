import { GetUser } from './../../get-user.decorator';
import { WebUsers } from './../../../entities/WebUsers';
import { InterfaceQuery } from '../../helpers/interface.query';
import { HabillementproService } from './habillementpro.service';
import { Body, Controller, Get, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import search, { InterfaceUpdateTaille } from './interface';


@Controller('habillementpro')
@UseGuards(AuthGuard())
export class HabillementproController {
    constructor(private srv: HabillementproService) { }

    @Get('/filter')
    getdataFilter(@GetUser() user: WebUsers): Promise<unknown> {
        return this.srv.getFilterData(user.refacteurWuser)
    }

    @Get('/save')
    validateTaile(@GetUser() user: WebUsers): Promise<any> {
        return this.srv.saveProd(user.refacteurWuser)
    }

    @Post('/search')
    getdata(@Query() query: InterfaceQuery, @GetUser() user: WebUsers, @Body() search: search): Promise<unknown> {
        return this.srv.search(query, user.refacteurWuser, search)
    }


    @Put()
    updateTaille(@Body() data: InterfaceUpdateTaille): Promise<any> {
        return this.srv.updateTaille(data)
    }
}
