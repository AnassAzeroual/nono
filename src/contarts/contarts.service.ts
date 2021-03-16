import { WebContrats } from './../../entities/WebContrats';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContartsService {
    // constructor(
    //     // @InjectRepository(WebContrats) private repoWebR: Repository<WebContrats>
    // ) { }

    async searchFacture(): Promise<unknown> {
        // const startFacture = moment(start, 'DD/MM/YYYY').format('YYYY-MM-DD')
        // const endFacture = moment(end, 'DD/MM/YYYY').format('YYYY-MM-DD')
        // const queryData = `
        // SELECT * FROM web_facturation AS f
        // WHERE f.refacteur_wfact = '${acteurID}'
        // AND f.flag_wfact = 'A'
        // LIMIT ${skip},${take}`
        // const queryDataCount = `
        // SELECT COUNT(*) as count FROM web_facturation AS f
        // WHERE f.refacteur_wfact = '${acteurID}'
        // AND f.etat_wfact LIKE '${(showAll == true) ? '%' : 'AR'}'
        // AND (f.date_wfact BETWEEN '${startFacture}' AND '${endFacture}')
        // AND f.flag_wfact = 'A'`
        // const data = await this.repoWebR.query(`${queryData}`)
        // const count = await this.repoWebR.query(`${queryDataCount}`)
        // const res = { data, count: Number(count[0].count) }
        return "res"
    }
}
