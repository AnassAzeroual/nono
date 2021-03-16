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
exports.MoncompteService = void 0;
const WebActeurs_1 = require("./../../entities/WebActeurs");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let MoncompteService = class MoncompteService {
    constructor(repoWebActeur) {
        this.repoWebActeur = repoWebActeur;
    }
    getActeurInfos(refacteurWacteur) {
        return this.repoWebActeur.findOne({ refacteurWacteur });
    }
    async update(refacteurWacteur, newData) {
        const data = await this.repoWebActeur.findOne({ refacteurWacteur });
        Object.keys(newData).forEach((key) => {
            data[key] = newData[key];
        });
        const res = await this.repoWebActeur.save(data);
        return { res };
    }
};
MoncompteService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(WebActeurs_1.WebActeurs)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MoncompteService);
exports.MoncompteService = MoncompteService;
//# sourceMappingURL=moncompte.service.js.map