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
exports.SpaceService = void 0;
const WebUsers_1 = require("./../../entities/WebUsers");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SpaceService = class SpaceService {
    constructor(repoWebUsers) {
        this.repoWebUsers = repoWebUsers;
    }
    async getAll(search, paginate, refacteurWuser) {
        search.contrat = (search.contrat != 0) ? search.contrat : '%';
        search.site = (search.site != 0) ? search.site : '%';
        search.dept = (search.dept != 0) ? search.dept : '%';
        const dataSearch = `
        SELECT
            u.ref_wuser,
            u.refacteur_wuser AS refacteurWuser,
            s.ref_wsiteacteur,
            s.intitule_wsiteacteur,
            d.intitule_wdepsite,
            u.nom_wuser ,
            u.prenom_wuser ,
            u.accesespace_wuser ,
            u.etat_wuser
            FROM web_users AS u 
            INNER JOIN web_contrats AS c ON u.refacteur_wuser = c.refacteur_wcontrat
            INNER JOIN web_acteurs_sites AS s ON u.refsite_wuser = s.ref_wsiteacteur
            INNER JOIN web_acteurs_sites_departements AS d ON u.refdep_wuser = d.ref_wdepsite
            WHERE u.refacteur_wuser = ${refacteurWuser} 
            AND s.ref_wsiteacteur LIKE '${search.site}' 
            AND c.refcontrat_wcontrat LIKE '${search.contrat}' 
            AND d.ref_wdepsite LIKE '${search.dept}'
        
        GROUP BY u.login_wuser,u.password_wuser
        ORDER BY s.intitule_wsiteacteur ,d.ordre_wdepsite,u.nom_wuser ,u.prenom_wuser
        LIMIT ${paginate.skip},${paginate.take}
        `;
        const dataCount = `
        SELECT
            *
            FROM web_users AS u 
            INNER JOIN web_contrats AS c ON u.refacteur_wuser = c.refacteur_wcontrat
            INNER JOIN web_acteurs_sites AS s ON u.refsite_wuser = s.ref_wsiteacteur
            INNER JOIN web_acteurs_sites_departements AS d ON u.refdep_wuser = d.ref_wdepsite
            WHERE u.refacteur_wuser = ${refacteurWuser} 
            AND s.ref_wsiteacteur LIKE '${search.site}' 
            AND c.refcontrat_wcontrat LIKE '${search.contrat}' 
            AND d.ref_wdepsite LIKE '${search.dept}'
            GROUP BY u.login_wuser,u.password_wuser
        `;
        const res = await this.repoWebUsers.query(dataSearch);
        const data = await this.buildSpace(res);
        const count = await this.repoWebUsers.query(dataCount);
        return await { data, count: Number(count.length) };
    }
    async buildSpace(res) {
        const data = res;
        if (res) {
            for (let i = 0; i < res.length; i++) {
                const user = res[i];
                data[i]['sites'] = await this.getSitesByRefActeur(user.refacteurWuser);
            }
        }
        return data;
    }
    async getSitesByRefActeur(refacteurWuser) {
        const data = await this.repoWebUsers.query(`
        SELECT ref_wsiteacteur AS 'id', intitule_wsiteacteur AS 'name'
        FROM web_acteurs_sites
        WHERE refacteur_wsiteacteur = ${refacteurWuser}
        AND flag_wsiteacteur = 'A'
        `);
        return data;
    }
    getUserByID(id) {
        return this.repoWebUsers.findOne({ refWuser: id });
    }
    async edit(id, data) {
        const user = await this.getUserByID(id);
        Object.keys(data).forEach((key) => {
            user[key] = data[key];
        });
        const res = this.repoWebUsers.save(user);
        return { res };
    }
};
SpaceService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(WebUsers_1.WebUsers)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SpaceService);
exports.SpaceService = SpaceService;
//# sourceMappingURL=space.service.js.map