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
        const whereData = {
            refacteurWuser,
        }

        if (search['contrat'].length)
            whereData['refsiteWuser'] = search['contrat']
        if (search['site'].length)
            whereData['refsiteWuser'] = search['site']
        if (search['dept'].length)
            whereData['refdepWuser'] = search['dept']
        console.log(whereData);

        const res = await this.repoWebUsers.query(`
        SELECT
u.ref_wuser ,
u.refacteur_wuser AS 'refacteurWuser',
u.intituleacteur_wuser,
u.nom_wuser ,
u.prenom_wuser ,
u.accesespace_wuser ,
u.etat_wuser ,
c.refcontrat_wcontrat ,
c.code_wcontrat ,
s.ref_wsiteacteur ,
s.intitule_wsiteacteur ,
d.refsite_wdepsite ,
d.intitule_wdepsite 
 FROM web_users AS u 
 INNER JOIN web_contrats AS c ON u.refacteur_wuser = c.refacteur_wcontrat
 INNER JOIN web_acteurs_sites AS s ON u.refacteur_wuser = s.refacteur_wsiteacteur
 INNER JOIN web_acteurs_sites_departements AS d ON u.refacteur_wuser = d.refacteur_wdepsite
 WHERE c.refcontrat_wcontrat = 2 AND s.ref_wsiteacteur = 5 AND d.refsite_wdepsite = 5
 GROUP BY u.nom_wuser
        `)
        const data = await this.buildSpace(res);
        const count = 0
        return await { data, count }
    }

    private async buildSpace(res) {
        const data = res;
        if (res) {
            for (let i = 0; i < res.length; i++) {
                const user = res[i];
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
