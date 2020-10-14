import { WebPorteurs } from './../../../entities/WebPorteurs';
import { InterfaceQuery } from '../../helpers/interface.query';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import search from './interface';

@Injectable()
export class HabillementproService {
    constructor(
        @InjectRepository(WebPorteurs) private repoWebPorteurs: Repository<WebPorteurs>
    ) { }

    async getFilterData(refacteurWdotporteur: number): Promise<unknown> {

        const obj_contart = await this.repoWebPorteurs.query
            (
                `SELECT refcontrat_wdotporteur as id
                FROM web_porteurs
                WHERE flag_wdotporteur = 'A'
                and refacteur_wdotporteur = ${refacteurWdotporteur}
                group by refcontrat_wdotporteur`
            )
        const obj_site = await this.repoWebPorteurs.query
            (
                `SELECT refsite_wdotporteur as id,
                codesite_wdotporteur as name
                FROM web_porteurs
                WHERE flag_wdotporteur = 'A'
                and refacteur_wdotporteur = ${refacteurWdotporteur}
                group by refsite_wdotporteur`
            )
        const obj_depot = await this.repoWebPorteurs.query
            (
                `SELECT refdep_wdotporteur as id,
                codedep_wdotporteur as name
                FROM web_porteurs
                WHERE flag_wdotporteur = 'A'
                and refacteur_wdotporteur = ${refacteurWdotporteur}
                group by refdep_wdotporteur`
            )
        const obj_metier = await this.repoWebPorteurs.query
            (
                `SELECT refmetier_wdotporteur as id,
                metier_wdotporteur as name
                FROM web_porteurs
                WHERE flag_wdotporteur = 'A'
                and refacteur_wdotporteur = ${refacteurWdotporteur}
                group by refmetier_wdotporteur`
            )

        return { res: { obj_contart, obj_site, obj_depot, obj_metier } }
        return this.repoWebPorteurs.query(`SELECT refcontrat_wdotporteur,
          refsite_wdotporteur,
          codesite_wdotporteur,
          refdep_wdotporteur,
          codedep_wdotporteur,
          refmetier_wdotporteur,
          metier_wdotporteur,
          FROM web_porteurs
          group by refsite_wdotporteur,refdep_wdotporteur,refmetier_wdotporteur`)
    }

    async search(query: InterfaceQuery, refacteur_wdotporteur: number, search: search): Promise<unknown> {
        let data = []
        let toCount = []
        search.contrat = (search.contrat.length < 1) ? '%' : search.contrat
        search.site = (search.site.length < 1) ? '%' : search.site
        search.dept = (search.dept.length < 1) ? '%' : search.dept
        search.metier = (search.metier.length < 1) ? '%' : search.metier
        data = await this.repoWebPorteurs.query(this.queryFunc(refacteur_wdotporteur, search, query));
        if (search.detail) {
            toCount = await this.repoWebPorteurs.query(`SELECT
            refacteur_wdotporteur
            
            FROM
            web_porteurs

            WHERE 
            flag_wdotporteur='A'
            and refacteur_wdotporteur =${refacteur_wdotporteur}
            and web_porteurs.refcontrat_wdotporteur LIKE '${search.contrat}'
            and web_porteurs.refsite_wdotporteur like '${search.site}'
            and web_porteurs.refdep_wdotporteur like '${search.dept}'
            and web_porteurs.refmetier_wdotporteur like '${search.metier}'`)
        } else {
            toCount = await this.repoWebPorteurs.query(`SELECT
            codesite_wdotporteur,refsite_wdotporteur,article_ref_wdotporteur
            
            FROM
            web_porteurs
            
            WHERE 
            flag_wdotporteur='A'
            and refacteur_wdotporteur =${refacteur_wdotporteur}
            and web_porteurs.refcontrat_wdotporteur LIKE '${search.contrat}'
            and web_porteurs.refsite_wdotporteur like '${search.site}'
            and web_porteurs.refdep_wdotporteur like '${search.dept}'
            and web_porteurs.refmetier_wdotporteur like '${search.metier}'
            
            group by article_ref_wdotporteur,refsite_wdotporteur`)
        }

        return { data, count: toCount.length }
    }

    private queryFunc(refacteur_wdotporteur: number, search: search, query: InterfaceQuery): string {
        let queryString = ""
        if (search.detail) {
            queryString = `SELECT
            ref_wdotporteur,
            codesite_wdotporteur,
            codedep_wdotporteur,
            metier_wdotporteur,
            article_intitule_wdotporteur,
            article_ref_wdotporteur,
            qtepardotation_wdotporteur,
            matricule_wdotporteur,
            nomprenom_wdotporteur,
            genre_wdotporteur,
            taille_wdotporteur
    
            FROM
            web_porteurs
    
            WHERE 
            flag_wdotporteur='A'
            and refacteur_wdotporteur =${refacteur_wdotporteur}
            and web_porteurs.refcontrat_wdotporteur LIKE '${search.contrat}'
            and web_porteurs.refsite_wdotporteur like '${search.site}'
            and web_porteurs.refdep_wdotporteur like '${search.dept}'
            and web_porteurs.refmetier_wdotporteur like '${search.metier}'
    
            order by article_intitule_wdotporteur
            LIMIT ${query.take} OFFSET ${query.skip}
            `;
        } else {
            queryString = `SELECT
            ref_wdotporteur,
            codesite_wdotporteur,
            codedep_wdotporteur,
            metier_wdotporteur,
            article_intitule_wdotporteur,
            article_ref_wdotporteur,
            qtepardotation_wdotporteur,
            count(refporteur_wdotporteur) as count
    
            FROM
            web_porteurs
    
            WHERE 
            flag_wdotporteur='A'
            and refacteur_wdotporteur =${refacteur_wdotporteur}
            and web_porteurs.refcontrat_wdotporteur LIKE '${search.contrat}'
            and web_porteurs.refsite_wdotporteur like '${search.site}'
            and web_porteurs.refdep_wdotporteur like '${search.dept}'
            and web_porteurs.refmetier_wdotporteur like '${search.metier}'
    
            
            group by article_ref_wdotporteur,refsite_wdotporteur
    
            order by article_intitule_wdotporteur
            LIMIT ${query.take} OFFSET ${query.skip}
            `;
        }
        return queryString
    }
}
