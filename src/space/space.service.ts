import { WebActeursSitesDepartements } from './../../entities/WebActeursSitesDepartements';
import { WebActeursSites } from './../../entities/WebActeursSites';
import { WebContrats } from './../../entities/WebContrats';
import { WebUsers } from './../../entities/WebUsers';
import { InterfaceQuery } from './../helpers/interface.query';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SpaceService {

    constructor(
        @InjectRepository(WebUsers) private repoWebUsers: Repository<WebUsers>,
        @InjectRepository(WebContrats) private repoWebContrats: Repository<WebContrats>,
        @InjectRepository(WebActeursSites) private repoWebActeursSites: Repository<WebActeursSites>,
        @InjectRepository(WebActeursSitesDepartements) private repoWebActeursSitesDepartements: Repository<WebActeursSitesDepartements>,
    ) { }


    async getAll(search: unknown, paginate: InterfaceQuery, refacteurWuser: number): Promise<any> {
        console.log(search);

        const res = await this.repoWebUsers.findAndCount(
            {
                skip: paginate.skip,
                take: paginate.take,
                where: {
                    refacteurWuser,
                }
            }) || []
        const data = await this.buildSpace(res);
        const count = res[1]
        return await this.getContartsByIdActeur(refacteurWuser)
    }

    private async buildSpace(res) {
        const data = res[0];
        if (res[0]) {
            for (let i = 0; i < res[0].length; i++) {
                const user = res[0][i];
                data[i]['sites'] = await this.getSitesByRefActeur(user.refacteurWuser);
            }
        }
        return data;
    }

    async getSitesByRefActeur(refacteurWuser: number): Promise<any> {
        const data = await this.repoWebUsers.query(`
        SELECT ref_wsiteacteur AS 'id', intitule_wsiteacteur AS 'name'
        FROM web_acteurs_sites
        WHERE refacteur_wsiteacteur = ${refacteurWuser}
        AND flag_wsiteacteur = 'A'
        `)
        return data
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


    //--------- filters
    async getContartsByIdActeur(refacteurWcontrat: number): Promise<unknown> {
        return await this.repoWebContrats.find({ select: ['refcontratWcontrat', 'codeWcontrat'], where: { refacteurWcontrat } }) || []
    }

    async getSitesByIdActeur(refacteurWsiteacteur: number): Promise<unknown> {
        return await this.repoWebActeursSites.find({ select: ['refWsiteacteur', 'intituleWsiteacteur'], where: { refacteurWsiteacteur } }) || []
    }

    async getSitesDepartementsByIdActeur(refacteurWdepsite: number): Promise<unknown> {
        return await this.repoWebActeursSitesDepartements.find({ select: ['refWdepsite', 'intituleWdepsite'], where: { refacteurWdepsite } }) || []
    }

    async buildFilter(refActeur: number): Promise<unknown> {
        const res = {
            contrat: await this.getContartsByIdActeur(refActeur),
            site: await this.getSitesByIdActeur(refActeur),
            departement: await this.getSitesDepartementsByIdActeur(refActeur),
        }
        return { res }
    }

}
