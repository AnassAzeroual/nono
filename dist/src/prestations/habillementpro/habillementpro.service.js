"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabillementproService = void 0;
const WebMouvements_1 = require("./../../../entities/WebMouvements");
const ParamListeTailles_1 = require("./../../../entities/ParamListeTailles");
const WebPorteurs_1 = require("./../../../entities/WebPorteurs");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let HabillementproService = class HabillementproService {
    constructor(repoWebPorteurs, repoParamListeTailles, repoWebMouvements) {
        this.repoWebPorteurs = repoWebPorteurs;
        this.repoParamListeTailles = repoParamListeTailles;
        this.repoWebMouvements = repoWebMouvements;
    }
    async getFilterData(refacteurWdotporteur) {
        const obj_contart = await this.queryFilterMaker(refacteurWdotporteur, "refcontrat_wdotporteur as id FROM web_porteurs", "group by refcontrat_wdotporteur");
        const obj_site = await this.queryFilterMaker(refacteurWdotporteur, "refsite_wdotporteur as id,codesite_wdotporteur as name FROM web_porteurs", "group by refsite_wdotporteur");
        const obj_depot = await this.queryFilterMaker(refacteurWdotporteur, "refdep_wdotporteur as id,codedep_wdotporteur as name FROM web_porteurs", "group by refdep_wdotporteur");
        const obj_metier = await this.queryFilterMaker(refacteurWdotporteur, "refmetier_wdotporteur as id,metier_wdotporteur as name FROM web_porteurs", "group by refmetier_wdotporteur");
        return { res: { obj_contart, obj_site, obj_depot, obj_metier } };
    }
    async search(query, refacteur_wdotporteur, dataSearch) {
        let data = [];
        let toCount = [];
        let A_AV_check = [];
        dataSearch.contrat = (dataSearch.contrat.length < 1) ? '%' : dataSearch.contrat;
        dataSearch.site = (dataSearch.site.length < 1) ? '%' : dataSearch.site;
        dataSearch.dept = (dataSearch.dept.length < 1) ? '%' : dataSearch.dept;
        dataSearch.metier = (dataSearch.metier.length < 1) ? '%' : dataSearch.metier;
        dataSearch.search = (dataSearch.search.length < 1) ? '' : `%${dataSearch.search}%`;
        data = await this.repoWebPorteurs.query(this.queryFunc(refacteur_wdotporteur, dataSearch, query));
        if (dataSearch.detail) {
            toCount = await this.toCountData(toCount, refacteur_wdotporteur, dataSearch);
        }
        else {
            const data = { select_data: ",refsite_wdotporteur,article_ref_wdotporteur", group_by: " group by article_ref_wdotporteur,refsite_wdotporteur" };
            toCount = await this.toCountData(toCount, refacteur_wdotporteur, dataSearch, data);
        }
        A_AV_check = await this.repoWebPorteurs.query(`
        SELECT COUNT(*) as a FROM  web_porteurs
        WHERE refacteur_wdotporteur = ${refacteur_wdotporteur} AND  flag_wdotporteur = 'A'
        AND (etat_wdotporteur != 'AV' OR taille_wdotporteur = '')
        `);
        data = await this.addTailleOptions(dataSearch, data);
        return { data, count: toCount.length, dialog: false, validated: (A_AV_check[0].a == 0) ? true : false };
    }
    getPorteurByID(id) {
        return this.repoWebPorteurs.findOne({ refWdotporteur: id });
    }
    async updateTaille(newData) {
        const data = await this.getPorteurByID(newData.refWdotporteur);
        Object.keys(newData).forEach((key) => {
            data[key] = newData[key];
        });
        const res = this.repoWebPorteurs.save(data);
        return { taille: (await res).tailleWdotporteur, id: (await res).refWdotporteur };
    }
    async saveProd(refacteurWdotporteur) {
        const data = await this.repoWebPorteurs.findAndCount({ refacteurWdotporteur, flagWdotporteur: 'A', tailleWdotporteur: '' });
        const search = {
            detail: true,
            contrat: "",
            site: "",
            dept: "",
            metier: "",
            search: ""
        };
        const querysearch = { skip: 0, take: 5, order: 'DESC' };
        if (data[1] == 0) {
            await this.repoWebPorteurs.query(`UPDATE web_porteurs SET etat_wdotporteur = 'AV'
                WHERE refacteur_wdotporteur = ${refacteurWdotporteur} AND flag_wdotporteur = 'A'`);
            return this.search(querysearch, refacteurWdotporteur, search);
        }
        else {
            const queryData = await this.repoWebPorteurs.query(`SELECT * FROM  web_porteurs
                WHERE refacteur_wdotporteur = ${refacteurWdotporteur} AND flag_wdotporteur = 'A' AND taille_wdotporteur = ''`);
            const result = await this.addTailleOptions(search, queryData);
            return { data: result, count: data[1], dialog: true, validated: false };
        }
    }
    async getdataQRs(refacteurWmvt, refporteurWmvt) {
        const res = await this.repoWebMouvements.query(`
        SELECT
            m.cbarre_wmvt AS qr
        FROM
            web_mouvements AS m  
        WHERE 
            m.flag_wmvt='A'
        AND 
            m.refacteur_wmvt = ${refacteurWmvt}
        AND 
            m.refporteur_wmvt = ${refporteurWmvt}
        group BY 
            m.cbarre_wmvt
        order BY 
            m.ref_wmvt
        `);
        return { res };
    }
    async toCountData(toCount, refacteur_wdotporteur, dataSearch, data = { select_data: "", group_by: "" }) {
        toCount = await this.repoWebPorteurs.query(`SELECT
            codesite_wdotporteur${data.select_data}
            
            FROM
            web_porteurs
            
            WHERE 
            flag_wdotporteur='A'
            and refacteur_wdotporteur =${refacteur_wdotporteur}
            and web_porteurs.refcontrat_wdotporteur LIKE '${dataSearch.contrat}'
            and web_porteurs.refsite_wdotporteur like '${dataSearch.site}'
            and web_porteurs.refdep_wdotporteur like '${dataSearch.dept}'
            and web_porteurs.refmetier_wdotporteur like '${dataSearch.metier}'
            and (web_porteurs.nomprenom_wdotporteur like '${(dataSearch.search) ? dataSearch.search : '%'}' or web_porteurs.matricule_wdotporteur like '${(dataSearch.search) ? dataSearch.search : '%'}')

            ${data.group_by}
            `);
        return toCount;
    }
    queryFunc(refacteur_wdotporteur, dataSearch, query) {
        let queryString = "";
        if (dataSearch.detail) {
            queryString = `SELECT
            etat_wdotporteur,
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
            taille_wdotporteur,
            refgrilletaille_wdotporteur,
            refporteur_wdotporteur
    
            FROM
            web_porteurs
    
            WHERE 
            flag_wdotporteur='A'
            and etat_wdotporteur LIKE '%'
            and refacteur_wdotporteur =${refacteur_wdotporteur}
            and web_porteurs.refcontrat_wdotporteur LIKE '${dataSearch.contrat}'
            and web_porteurs.refsite_wdotporteur like '${dataSearch.site}'
            and web_porteurs.refdep_wdotporteur like '${dataSearch.dept}'
            and web_porteurs.refmetier_wdotporteur like '${dataSearch.metier}'
            and (web_porteurs.nomprenom_wdotporteur like '${(dataSearch.search) ? dataSearch.search : '%'}' or web_porteurs.matricule_wdotporteur like '${(dataSearch.search) ? dataSearch.search : '%'}')
    
            order by taille_wdotporteur
            LIMIT ${query.take} OFFSET ${query.skip}
            `;
        }
        else {
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
            and web_porteurs.refcontrat_wdotporteur LIKE '${dataSearch.contrat}'
            and web_porteurs.refsite_wdotporteur like '${dataSearch.site}'
            and web_porteurs.refdep_wdotporteur like '${dataSearch.dept}'
            and web_porteurs.refmetier_wdotporteur like '${dataSearch.metier}'
    
            
            group by taille_wdotporteur
    
            order by article_intitule_wdotporteur
            LIMIT ${query.take} OFFSET ${query.skip}
            `;
        }
        return queryString;
    }
    async getTaillsByCategorieID(id) {
        return await this.repoParamListeTailles.find({
            where: { refgrilletailleTaille: id, etatTaille: 'A' },
            select: ['refTaille', 'intituleTaille'],
            order: { ordreTaille: 'ASC' }
        });
    }
    async queryFilterMaker(refacteurWdotporteur, select, group) {
        return await this.repoWebPorteurs.query(`SELECT ${select}
                WHERE flag_wdotporteur = 'A' 
                and refacteur_wdotporteur = ${refacteurWdotporteur} 
                ${group}`);
    }
    async addTailleOptions(search, data) {
        if (search.detail) {
            const dataCopie = data;
            for (let i = 0; i < dataCopie.length; i++) {
                const item = dataCopie[i];
                data[i]['taille_Options'] = await this.getTaillsByCategorieID(item.refgrilletaille_wdotporteur);
            }
        }
        return data;
    }
};
HabillementproService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(WebPorteurs_1.WebPorteurs)),
    __param(1, typeorm_1.InjectRepository(ParamListeTailles_1.ParamListeTailles)),
    __param(2, typeorm_1.InjectRepository(WebMouvements_1.WebMouvements)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], HabillementproService);
exports.HabillementproService = HabillementproService;
//# sourceMappingURL=habillementpro.service.js.map