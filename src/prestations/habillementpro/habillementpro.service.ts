import { InterfaceQuery } from '../../helpers/interface.query';
import { WebArticles } from './../../../entities/WebArticles';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';

@Injectable()
export class HabillementproService {
    constructor(
        @InjectRepository(WebArticles) private repoWebarticles: Repository<WebArticles>
    ) { }

    readAll(query: InterfaceQuery, refacteurArtweb: number): Promise<unknown> {

        return this.repoWebarticles.findAndCount(
            {
                where: { flagArtweb: 'A', refacteurArtweb },
                order: { intitulearticleArtweb: query.order },
                take: query.take,
                skip: query.skip
            }
        )
    }

    async getFilterData(refacteurArtweb: number): Promise<unknown> {
        const datarefcontratArtweb: any = await this.repoWebarticles.find({
            where: { flagArtweb: 'A', refacteurArtweb },
            select: ["refcontratArtweb"]
        })
        const datarefsiteArtweb: any = await this.repoWebarticles.find({
            where: { flagArtweb: 'A', refacteurArtweb },
            select: ["refsiteArtweb"]
        })
        const datarefdepArtweb: any = await this.repoWebarticles.find({
            where: { flagArtweb: 'A', refacteurArtweb },
            select: ["refdepArtweb"]
        })
        const datarefmetierArtweb: any = await this.repoWebarticles.find({
            where: { flagArtweb: 'A', refacteurArtweb },
            select: ["refmetierArtweb"]
        })
        const seen = new Set();

        const acteur = await datarefcontratArtweb.filter(el => {
            const duplicate = seen.has(el.refcontratArtweb);
            seen.add(el.refcontratArtweb);
            return !duplicate;
        });

        const site = await datarefsiteArtweb.filter(el => {
            const duplicate = seen.has(el.refsiteArtweb);
            seen.add(el.refsiteArtweb);
            return !duplicate;
        });

        const depArtweb = await datarefdepArtweb.filter(el => {
            const duplicate = seen.has(el.refdepArtweb);
            seen.add(el.refdepArtweb);
            return !duplicate;
        });

        const metierArtweb = await datarefmetierArtweb.filter(el => {
            const duplicate = seen.has(el.refmetierArtweb);
            seen.add(el.refmetierArtweb);
            return !duplicate;
        });


        return await {
            res: { acteur, site, depArtweb, metierArtweb }
        }
    }
}
