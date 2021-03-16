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
exports.ReparationService = void 0;
const WebArticlesprojet_1 = require("./../../entities/WebArticlesprojet");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const WebReparationsreformes_1 = require("../../entities/WebReparationsreformes");
let ReparationService = class ReparationService {
    constructor(repoWeb, repoWebArticlesprojet) {
        this.repoWeb = repoWeb;
        this.repoWebArticlesprojet = repoWebArticlesprojet;
    }
    async getByCodebarre({ cbarre, site, dep, skip, take, page }, idActeur) {
        cbarre = (cbarre.length == 0 || cbarre == 0) ? '%' : cbarre;
        site = (site.length == 0 || site == 0) ? '%' : site;
        dep = (dep.length == 0 || dep == 0) ? '%' : dep;
        const res = {
            data: await this.queryParams(cbarre, site, dep, skip, take, page, idActeur),
            count: await this.queryParamsCounts(cbarre, site, dep, page, idActeur)
        };
        return { res };
    }
    queryParams(cbarre, site, dep, skip, take, page, idActeur) {
        const queryDatas = `
        SELECT 
            r.ddemande_webrr AS demande_date,
            r.codereparationreforme_webrr AS rep_code,
            s.intitule_wsiteacteur AS site,
            s.ref_wsiteacteur AS siteID,
            d.intitule_wdepsite AS dep,
            d.ref_wdepsite AS depID,
            a.intitulearticle_artpweb AS article,
            r.porteur_webrr AS porteur,
            r.repar_type_webrr AS types,
            r.etat_rr AS statut,
            r.codebarre_webrr AS ccode
        FROM web_reparationsreformes AS r
        LEFT JOIN web_mouvements AS m
        ON r.refserieetiq_webrr = m.refserieetiq_wmvt
        LEFT JOIN web_articlesprojet AS a
        ON r.refarticleprojet_webrr = a.refarticleprojet_artpweb
        LEFT JOIN web_acteurs_sites AS s
        ON m.refsite_wmvt = s.ref_wsiteacteur
        LEFT JOIN web_acteurs_sites_departements AS d
        ON m.refdep_wmvt = d.ref_wdepsite
        WHERE r.refclient_webrr = '${idActeur}'
        AND r.codebarre_webrr LIKE '${cbarre}'
        AND m.refsite_wmvt LIKE '${site}'
        AND m.refdep_wmvt LIKE '${dep}'
        AND r.type_webrr LIKE '${page}'
        GROUP BY r.ref_webrr
        LIMIT ${skip},${take}
        `;
        return this.repoWeb.query(queryDatas);
    }
    async queryParamsCounts(cbarre, site, dep, page, idActeur) {
        const count = await this.repoWeb.query(`
        SELECT 
            r.ref_webrr
        FROM web_reparationsreformes AS r 
        LEFT JOIN web_mouvements AS m
        ON r.refserieetiq_webrr = m.refserieetiq_wmvt
        LEFT JOIN web_articlesprojet AS a
        ON r.refarticleprojet_webrr = a.refarticleprojet_artpweb
        LEFT JOIN web_acteurs_sites AS s
        ON m.refsite_wmvt = s.ref_wsiteacteur
        LEFT JOIN web_acteurs_sites_departements AS d
        ON m.refdep_wmvt = d.ref_wdepsite
        WHERE r.refclient_webrr = '${idActeur}'
        AND r.codebarre_webrr LIKE '${cbarre}'
        AND m.refsite_wmvt LIKE '${site}'
        AND m.refdep_wmvt LIKE '${dep}'
        AND r.type_webrr LIKE '${page}'
        GROUP BY r.ref_webrr
        `);
        return count.length;
    }
    async getDemandebyCode({ codeRepar }) {
        const qy = `
        SELECT 
            r.ddemande_webrr AS demande_date,
            r.codereparationreforme_webrr AS rep_code,
            s.ref_wsiteacteur AS site,
            d.ref_wdepsite AS dep,
            p.matricule_wdotporteur AS matriculeporteur,
            r.porteur_webrr AS porteur,
            r.type_webrr AS type,
            r.repar_type_webrr AS types,
            r.etat_rr AS statut,
            r.codebarre_webrr AS ccode,
            m.designarticlep_wmvt AS article,
            m.refarticlep_wmvt AS articleID,
            r.description_webrr AS remarque,
            r.photo1_chemin_webrr AS photo1,
            r.photo2_chemin_webrr AS photo2
        FROM web_reparationsreformes AS r 
        inner JOIN web_mouvements AS m
        ON r.refserieetiq_webrr = m.refserieetiq_wmvt
        left JOIN web_porteurs AS p ON p.refporteur_wdotporteur = m.refporteur_wmvt
        LEFT JOIN web_articlesprojet AS a
        ON r.refarticleprojet_webrr = a.refarticleprojet_artpweb
        LEFT JOIN web_acteurs_sites AS s
        ON m.refsite_wmvt = s.ref_wsiteacteur
        LEFT JOIN web_acteurs_sites_departements AS d
        ON m.refdep_wmvt = d.ref_wdepsite
        WHERE r.codereparationreforme_webrr like '${codeRepar}'
        GROUP BY r.ref_webrr
        `;
        return { res: await this.repoWeb.query(qy) };
    }
    async saveDemande(newData, ccbarre) {
        newData['codebarreWebrr'] = ccbarre;
        const res = await this.repoWeb.save(newData);
        return { res };
    }
    async demandeReparation(code, id) {
        const data = await this.repoWebArticlesprojet.query(`
        SELECT 
            m.cbarre_wmvt AS codebarre,
            z.intitulearticle_artpweb AS article,
            m.refsite_wmvt AS siteID,
            m.refdep_wmvt AS depID,
            p.matricule_wdotporteur AS matricule,
            p.nomprenom_wdotporteur AS nomPorteur,
            m.refserieetiq_wmvt AS serieID,
            z.refarticleprojet_artpweb AS refArticle,
            m.refporteur_wmvt AS porteurID,
            m.refcontrat_wmvt AS contratID,
            m.refacteur_wmvt AS acteurID
        FROM web_mouvements AS m
        left JOIN web_porteurs AS p ON p.refporteur_wdotporteur = m.refporteur_wmvt
        left JOIN web_articlesprojet  AS z ON z.refarticleprojet_artpweb = m.refarticlep_wmvt
        WHERE m.cbarre_wmvt LIKE '${code}'
        AND m.refacteur_wmvt LIKE '${id}'
        `);
        data[0]['date_demande'] = new Date();
        return { res: data[0] };
    }
};
ReparationService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(WebReparationsreformes_1.WebReparationsreformes)),
    __param(1, typeorm_1.InjectRepository(WebArticlesprojet_1.WebArticlesprojet)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ReparationService);
exports.ReparationService = ReparationService;
//# sourceMappingURL=reparation.service.js.map