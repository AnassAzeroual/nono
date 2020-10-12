import { GetUser } from './../../get-user.decorator';
import { WebUsers } from './../../../entities/WebUsers';
import { InterfaceQuery } from '../../helpers/interface.query';
import { HabillementproService } from './habillementpro.service';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('habillementpro')
@UseGuards(AuthGuard())
export class HabillementproController {
    constructor(private srv: HabillementproService) { }

    @Get()
    getdata(@Query() query: InterfaceQuery, @GetUser() user: WebUsers): Promise<unknown> {
        return this.srv.readAll(query, user.refacteurWuser)
    }

    @Get('/filter')
    getdataFilter(@GetUser() user: WebUsers): Promise<unknown> {
        return this.srv.getFilterData(user.refacteurWuser)
    }
}
