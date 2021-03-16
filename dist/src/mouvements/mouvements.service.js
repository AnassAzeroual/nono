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
exports.MouvementsService = void 0;
const WebProgressColors_1 = require("./../../entities/WebProgressColors");
const WebContrats_1 = require("./../../entities/WebContrats");
const WebMouvements_1 = require("./../../entities/WebMouvements");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MouvementsService = class MouvementsService {
    constructor(repoWeb, repoWebContrat, repoWebProgress) {
        this.repoWeb = repoWeb;
        this.repoWebContrat = repoWebContrat;
        this.repoWebProgress = repoWebProgress;
    }
    async getMouveByCodeBarre({ skip, take, cbarre, detail }, refacteurWmvt) {
        let res;
        const codeBarre = (cbarre) ? cbarre : '%';
        if (detail == 'true') {
            const query = `
            SELECT
                web_mouvements.refserieetiq_wmvt AS id,
                ifnull(infoporteur.matricule_wdotporteur,'') AS matriculeporteur,
                ifnull(infoporteur.nomprenom_wdotporteur,'') AS nomprenomporteur,
                ifnull(siteporteur.codesite_wdotporteur,'') AS site,
                ifnull(depporteur.codedep_wdotporteur,'') AS dep,
                ifnull(web_contrats.code_wcontrat,'') AS codecontrat,
                web_contrats.refcontrat_wcontrat AS idcontrat,
                web_contrats.datemiseenplace_wcontrat AS datemisenplacecontrat,
                web_contrats.dureecontratmois_wcontrat as dureecontratmois,
                web_mouvements.designarticlep_wmvt  as intitulearticle,
                web_contrats.du_wcontrat  AS du,
                web_contrats.au_wcontrat AS au
            FROM web_mouvements
                left join web_porteurs as infoporteur on infoporteur.refporteur_wdotporteur=web_mouvements.refporteur_wmvt
                left join web_porteurs  as siteporteur on siteporteur.refsite_wdotporteur=web_mouvements.refsite_wmvt
                left join web_porteurs as depporteur on depporteur.refdep_wdotporteur=web_mouvements.refsite_wmvt
                left join web_contrats  on web_contrats.refcontrat_wcontrat=web_mouvements.refcontrat_wmvt
            where gtype_wmvt='traca'
            AND cbarre_wmvt LIKE '${codeBarre}'
            AND flag_wmvt = 'A'
            AND refacteur_wmvt= ${refacteurWmvt}
            group by cbarre_wmvt
        `;
            res = await this.repoWeb.query(query);
            console.log(res);
            res[0].countREPAR = await this.repoWeb.count({ refacteurWmvt, cbarreWmvt: codeBarre, typeWmvt: 'REPAR' });
        }
        else {
            res = await this.repoWeb.query(`
            SELECT
                web_mouvements.ref_wmvt as id,
                web_mouvements.dpiece_wmvt as datemouvement,
                web_mouvements.type_wmvt as typemouvement,
                web_mouvements.intitulepiece_wmvt as infomouvement

            FROM
                web_mouvements
            where cbarre_wmvt LIKE '${codeBarre}'
            AND refacteur_wmvt= ${refacteurWmvt}
            AND flag_wmvt = 'A'

            LIMIT ${skip},${take}
            `);
            const temps = {
                data: res,
                count: await this.repoWeb.count({ refacteurWmvt, cbarreWmvt: codeBarre, flagWmvt: 'A' })
            };
            res = temps;
        }
        res['progress'] = await this.progressBar(cbarre, refacteurWmvt);
        return { res };
    }
    async progressBar(codebarre, idActeur) {
        const idContrat = await this.repoWeb.findOne({ select: ['refcontratWmvt'], where: { cbarreWmvt: codebarre } });
        if (!idContrat) {
            throw new common_1.NotFoundException();
        }
        const res = await this.repoWebContrat.query(`
        SELECT
        (100*TIMESTAMPDIFF(MONTH,datemiseenplace_wcontrat,now())/dureecontratmois_wcontrat) as pourcent
        FROM
        web_contrats
        where web_contrats.refcontrat_wcontrat LIKE '${idContrat.refcontratWmvt}'
        `);
        let percent;
        if (res[0].pourcent) {
            if (res[0].pourcent > 100) {
                percent = 100;
            }
            if (res[0].pourcent < 0) {
                percent = 0;
            }
        }
        return { percent: Number(parseFloat(percent).toFixed(2)) || 0, color: await this.getPercentColors(idActeur, percent) };
    }
    async getPercentColors(idActeur, percent) {
        const data = await this.repoWebProgress.find({ select: ['controlleur', 'toPercent', 'colorHex'], where: { idActeur }, order: { toPercent: 'DESC' } });
        let color = "";
        if (data.length > 0) {
            data.forEach(one => {
                console.log(one.toPercent);
                if (percent <= one.toPercent) {
                    color = one.colorHex;
                }
            });
        }
        return color;
    }
};
MouvementsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(WebMouvements_1.WebMouvements)),
    __param(1, typeorm_1.InjectRepository(WebContrats_1.WebContrats)),
    __param(2, typeorm_1.InjectRepository(WebProgressColors_1.WebProgressColors)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MouvementsService);
exports.MouvementsService = MouvementsService;
//# sourceMappingURL=mouvements.service.js.map