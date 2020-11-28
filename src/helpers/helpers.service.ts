import { WebActeursSitesDepartements } from './../../entities/WebActeursSitesDepartements';
import { WebContrats } from './../../entities/WebContrats';
import { Repository } from 'typeorm';
import { WebActeursSites } from './../../entities/WebActeursSites';
import { getReceptionObject } from './interface.query';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';

@Injectable()
export class HelpersService {

    constructor(
        @InjectRepository(WebActeursSites) private repoSites: Repository<WebActeursSites>,
        @InjectRepository(WebContrats) private repoContrats: Repository<WebContrats>,
        @InjectRepository(WebActeursSitesDepartements) private repoDepartements: Repository<WebActeursSitesDepartements>,
    ) { }

    // Get Date now - 30 days
    public fixDate(body: getReceptionObject): { start, end } {
        let start: any;
        let end: any;
        if (body.start.length == 0 || body.end.length == 0) {
            const d = new Date();
            d.setDate(d.getDate() - 30);
            start = new Date(d).toLocaleDateString();
            end = new Date().toLocaleDateString();
        } else {
            start = moment(body.start, 'DD/MM/YYYY').format('YYYY-MM-DD');
            end = moment(body.end, 'DD/MM/YYYY').format('YYYY-MM-DD');
        }
        return { start, end };
    }
    // get Site by refActeurID
    public async sites(refacteurWsiteacteur: number): Promise<any[]> {
        const res = []
        res.push({ refWsiteacteur: 0, intituleWsiteacteur: "TOUTES" })
        res.push(...await this.repoSites.find({ select: ['refWsiteacteur', 'intituleWsiteacteur'], where: { refacteurWsiteacteur } }))
        return res
    }
    // get Contrats by refActeurID
    public async contrats(refacteurWcontrat: number): Promise<any[]> {
        const res = []
        res.push({ refWcontrat: 0, codeWcontrat: "TOUTES" })
        res.push(...await this.repoContrats.find({ select: ['refWcontrat', 'codeWcontrat'], where: { refacteurWcontrat } }))
        return res
    }
    // get Departements by refActeurID
    public async departements(refacteurWdepsite: number): Promise<any[]> {
        const res = []
        res.push({ refWdepsite: 0, intituleWdepsite: "TOUTES" })
        res.push(...await this.repoDepartements.find({ select: ['refWdepsite', 'intituleWdepsite'], where: { refacteurWdepsite } }))
        return res
    }
}
