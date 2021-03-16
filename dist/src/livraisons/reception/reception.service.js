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
exports.ReceptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const helpers_service_1 = require("./../../helpers/helpers.service");
const WebReceptions_1 = require("./../../../entities/WebReceptions");
const WebReceptionsDetail_1 = require("./../../../entities/WebReceptionsDetail");
let ReceptionService = class ReceptionService {
    constructor(repoWebR, repoWebRDetails, srvHelpers) {
        this.repoWebR = repoWebR;
        this.repoWebRDetails = repoWebRDetails;
        this.srvHelpers = srvHelpers;
    }
    async getALL(refacteurWreception, param, body) {
        const { start, end } = this.srvHelpers.fixDate(body);
        const { take, skip } = param;
        const query = `SELECT * FROM web_receptions AS r
        WHERE refacteur_wreception = ${refacteurWreception}
        AND (r.dbrc_wreception BETWEEN '${start}' AND '${end}')
        AND r.refsite_wreception LIKE '${(body.site) ? body.site : '%'}'
        LIMIT ${skip}, ${take}
        `;
        const queryCount = `SELECT COUNT(*) as count FROM web_receptions AS r
        WHERE refacteur_wreception = ${refacteurWreception}
        AND (r.dbrc_wreception BETWEEN '${start}' AND '${end}')
        AND r.refsite_wreception LIKE '${(body.site) ? body.site : '%'}'`;
        const data = await this.repoWebR.query(query);
        const count = await this.repoWebR.query(queryCount);
        return { data, count: Number(count[0]['count']) };
    }
    async getSites(id) {
        const res = await this.srvHelpers.sites(id);
        return { res };
    }
    async getArticleByID(id, { skip, take }) {
        const data = await this.repoWebRDetails.findAndCount({ where: { refbrcWdreception: id }, skip, take });
        return { data: data[0], count: data[1] };
    }
};
ReceptionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(WebReceptions_1.WebReceptions)),
    __param(1, typeorm_1.InjectRepository(WebReceptionsDetail_1.WebReceptionsDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        helpers_service_1.HelpersService])
], ReceptionService);
exports.ReceptionService = ReceptionService;
//# sourceMappingURL=reception.service.js.map