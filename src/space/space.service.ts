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

    getUserByID(id: number): Promise<WebUsers> {
        return this.repoWebUsers.findOne({ refWuser: id })
    }

    async edit(id: number, data: WebUsers): Promise<unknown> {
        const user = await this.getUserByID(id)

        Object.keys(data).forEach((key) => {
            user[key] = data[key];
        });

        const res = this.repoWebUsers.save(user)
        return { res }
    }
}
