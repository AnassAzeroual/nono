import { Repository } from 'typeorm';
import { WebActeursSites } from './../../entities/WebActeursSites';
import { getReceptionObject } from './interface.query';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HelpersService {

    constructor(
        @InjectRepository(WebActeursSites) private repoSites: Repository<WebActeursSites>
    ) { }

    // Get Date now - 30 days
    public fixDate(body: getReceptionObject): { start, end } {
        let start: any;
        let end: any;
        if (body.end.length == 0) {
            const d = new Date();
            d.setDate(d.getDate() - 30);
            start = new Date(d).toLocaleDateString();
            end = new Date().toLocaleDateString();
        } else {
            start = new Date(body.start).toLocaleDateString();
            end = new Date(body.end).toLocaleDateString();
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
}
