import { InterfaceQuery } from './../helpers/interface.query';
import { WebUsers } from './../../entities/WebUsers';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SpaceService {

    constructor(
        @InjectRepository(WebUsers) private repoWebUsers: Repository<WebUsers>,
    ) { }


    async getAll(paginate: InterfaceQuery, refacteurWuser: number): Promise<any> {
        const res = await this.repoWebUsers.findAndCount({ skip: paginate.skip, take: paginate.take, where: { etatWuser: 'A', refacteurWuser } }) || []
        const data = res[0]
        const count = res[1]
        return { data, count }
    }
}
