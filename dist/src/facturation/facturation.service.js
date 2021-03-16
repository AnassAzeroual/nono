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
exports.QueryInterface = exports.FacturationService = void 0;
const WebFacturation_1 = require("./../../entities/WebFacturation");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const moment = require("moment");
let FacturationService = class FacturationService {
    constructor(repoWebFacture) {
        this.repoWebFacture = repoWebFacture;
    }
    async searchFacture({ showAll, start, end, take, skip }, acteurID) {
        const startFacture = moment(start, 'DD/MM/YYYY').format('YYYY-MM-DD');
        const endFacture = moment(end, 'DD/MM/YYYY').format('YYYY-MM-DD');
        const queryData = `
        SELECT * FROM web_facturation AS f
        WHERE f.refacteur_wfact = '${acteurID}'
        AND f.etat_wfact LIKE '${(showAll == true) ? '%' : 'AR'}'
        AND (f.date_wfact BETWEEN '${startFacture}' AND '${endFacture}')
        AND f.flag_wfact = 'A'
        LIMIT ${skip},${take}`;
        const queryDataCount = `
        SELECT COUNT(*) as count FROM web_facturation AS f
        WHERE f.refacteur_wfact = '${acteurID}'
        AND f.etat_wfact LIKE '${(showAll == true) ? '%' : 'AR'}'
        AND (f.date_wfact BETWEEN '${startFacture}' AND '${endFacture}')
        AND f.flag_wfact = 'A'`;
        const data = await this.repoWebFacture.query(`${queryData}`);
        const count = await this.repoWebFacture.query(`${queryDataCount}`);
        const res = { data, count: Number(count[0].count) };
        return res;
    }
    async getLibByID(id) {
        return await { id };
    }
};
FacturationService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(WebFacturation_1.WebFacturation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FacturationService);
exports.FacturationService = FacturationService;
class QueryInterface {
}
exports.QueryInterface = QueryInterface;
//# sourceMappingURL=facturation.service.js.map