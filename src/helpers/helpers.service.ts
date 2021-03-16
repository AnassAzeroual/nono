import { WebActeursSitesDepartements } from './../../entities/WebActeursSitesDepartements';
import { WebContrats } from './../../entities/WebContrats';
import { Repository } from 'typeorm';
import { WebActeursSites } from './../../entities/WebActeursSites';
import { getReceptionObject } from './interface.query';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { extname } from 'path'
import { v4 as uuidv4 } from 'uuid';
import fs = require('fs');

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
    public async sites(refacteurWsiteacteur: number): Promise<unknown> {
        const res = []
        res.push({ refWsiteacteur: 0, intituleWsiteacteur: "Tous" })
        res.push(...await this.repoSites.find({ select: ['refWsiteacteur', 'intituleWsiteacteur'], where: { refacteurWsiteacteur } }))
        return { res }
    }
    // get Contrats by refActeurID
    public async contrats(refacteurWcontrat: number): Promise<unknown> {
        const res = []
        res.push({ refWcontrat: 0, codeWcontrat: "Tous" })
        res.push(...await this.repoContrats.find({ select: ['refWcontrat', 'codeWcontrat'], where: { refacteurWcontrat } }))
        return { res }
    }
    // get Departements by refActeurID
    public async departements(refacteurWdepsite: number): Promise<unknown> {
        const res = []
        res.push({ refWdepsite: 0, intituleWdepsite: "Tous" })
        res.push(...await this.repoDepartements.find({ select: ['refWdepsite', 'intituleWdepsite'], where: { refacteurWdepsite } }))
        return { res }
    }
    // get Departements by Site ID
    public async departementsBySiteID(refsiteWdepsite: number): Promise<unknown> {
        const res = []
        res.push({ refWdepsite: 0, intituleWdepsite: "Tous" })
        res.push(...await this.repoDepartements.find({ select: ['refWdepsite', 'intituleWdepsite'], where: { refsiteWdepsite }, order: { ordreWdepsite: 'ASC' } }))
        return { res }
    }

}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const editFileName = (req, file, callback) => {
    // console.log(req.headers.host);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    const name = uuidv4();
    const fileExtName = extname(file.originalname);
    callback(null, `${name}${fileExtName}`);
};

export const dir = './sources';
