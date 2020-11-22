import { WebActeursSites } from './../../../entities/WebActeursSites';
import { InterfaceQuery } from './../../helpers/interface.query';
import { HelpersService } from './../../helpers/helpers.service';
import { getReceptionObject } from '../../helpers/interface.query';
import { WebReceptions } from './../../../entities/WebReceptions';
import { WebReceptionsDetail } from './../../../entities/WebReceptionsDetail';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReceptionService {
    constructor(
        @InjectRepository(WebReceptions) private repoWebR: Repository<WebReceptions>,
        @InjectRepository(WebReceptionsDetail) private repoWebRDetails: Repository<WebReceptionsDetail>,
        private srvHelpers: HelpersService
    ) { }

    async getALL(refacteurWreception: number, param: InterfaceQuery, body: getReceptionObject): Promise<unknown> {
        const { start, end } = this.srvHelpers.fixDate(body)
        const { take, skip } = param;

        const query = `SELECT * FROM web_receptions AS r
        WHERE  (r.dbrc_wreception BETWEEN '${start}' AND '${end}')
        AND r.refsite_wreception LIKE '${(body.site) ? body.site : '%'}'
        LIMIT ${skip}, ${take}
        `
        const queryCount = `SELECT COUNT(*) as count FROM web_receptions AS r
        WHERE  (r.dbrc_wreception BETWEEN '${start}' AND '${end}')
        AND r.refsite_wreception LIKE '${(body.site) ? body.site : '%'}'`

        const data = await this.repoWebR.query(query)
        const count = await this.repoWebR.query(queryCount)
        return { data, count: Number(count[0]['count']) }
    }

    async getSites(id: number): Promise<unknown> {
        const res = await this.srvHelpers.sites(id)
        console.log(res);

        return { res }
    }
}