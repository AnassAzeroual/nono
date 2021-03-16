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
exports.LivraisonService = void 0;
const helpers_service_1 = require("./../../helpers/helpers.service");
const WebLivraisonsDetail_1 = require("./../../../entities/WebLivraisonsDetail");
const WebLivraisons_1 = require("./../../../entities/WebLivraisons");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let LivraisonService = class LivraisonService {
    constructor(repoLivraison, repoDetails, srvHelpers) {
        this.repoLivraison = repoLivraison;
        this.repoDetails = repoDetails;
        this.srvHelpers = srvHelpers;
    }
    async getALL(clientID, param, body) {
        const { start, end } = this.srvHelpers.fixDate(body);
        const { take, skip } = param;
        const query = `SELECT * FROM web_livraisons AS r
        WHERE r.refclient_wlivraison = ${clientID}
        AND (r.datebl_wlivraison BETWEEN '${start}' AND '${end}')
        AND r.site_wlivraison LIKE '${(body.site) ? body.site : '%'}'
        LIMIT ${skip}, ${take}
        `;
        const queryCount = `SELECT COUNT(*) as count FROM web_livraisons AS r
        WHERE r.refclient_wlivraison = ${clientID}
        AND (r.datebl_wlivraison BETWEEN '${start}' AND '${end}')
        AND r.site_wlivraison LIKE '${(body.site) ? body.site : '%'}'`;
        const data = await this.repoLivraison.query(query);
        const count = await this.repoLivraison.query(queryCount);
        return { data, count: Number(count[0]['count']) };
    }
    async getArticleByID(id, { skip, take }) {
        const data = await this.repoDetails.findAndCount({ where: { refblWdlivraison: id }, skip, take });
        return { data: data[0], count: data[1] };
    }
};
LivraisonService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(WebLivraisons_1.WebLivraisons)),
    __param(1, typeorm_1.InjectRepository(WebLivraisonsDetail_1.WebLivraisonsDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        helpers_service_1.HelpersService])
], LivraisonService);
exports.LivraisonService = LivraisonService;
//# sourceMappingURL=livraison.service.js.map