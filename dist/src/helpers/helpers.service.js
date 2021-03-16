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
exports.dir = exports.editFileName = exports.imageFileFilter = exports.HelpersService = void 0;
const WebActeursSitesDepartements_1 = require("./../../entities/WebActeursSitesDepartements");
const WebContrats_1 = require("./../../entities/WebContrats");
const typeorm_1 = require("typeorm");
const WebActeursSites_1 = require("./../../entities/WebActeursSites");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const moment = require("moment");
const path_1 = require("path");
const uuid_1 = require("uuid");
const fs = require("fs");
let HelpersService = class HelpersService {
    constructor(repoSites, repoContrats, repoDepartements) {
        this.repoSites = repoSites;
        this.repoContrats = repoContrats;
        this.repoDepartements = repoDepartements;
    }
    fixDate(body) {
        let start;
        let end;
        if (body.start.length == 0 || body.end.length == 0) {
            const d = new Date();
            d.setDate(d.getDate() - 30);
            start = new Date(d).toLocaleDateString();
            end = new Date().toLocaleDateString();
        }
        else {
            start = moment(body.start, 'DD/MM/YYYY').format('YYYY-MM-DD');
            end = moment(body.end, 'DD/MM/YYYY').format('YYYY-MM-DD');
        }
        return { start, end };
    }
    async sites(refacteurWsiteacteur) {
        const res = [];
        res.push({ refWsiteacteur: 0, intituleWsiteacteur: "Tous" });
        res.push(...await this.repoSites.find({ select: ['refWsiteacteur', 'intituleWsiteacteur'], where: { refacteurWsiteacteur } }));
        return { res };
    }
    async contrats(refacteurWcontrat) {
        const res = [];
        res.push({ refWcontrat: 0, codeWcontrat: "Tous" });
        res.push(...await this.repoContrats.find({ select: ['refWcontrat', 'codeWcontrat'], where: { refacteurWcontrat } }));
        return { res };
    }
    async departements(refacteurWdepsite) {
        const res = [];
        res.push({ refWdepsite: 0, intituleWdepsite: "Tous" });
        res.push(...await this.repoDepartements.find({ select: ['refWdepsite', 'intituleWdepsite'], where: { refacteurWdepsite } }));
        return { res };
    }
    async departementsBySiteID(refsiteWdepsite) {
        const res = [];
        res.push({ refWdepsite: 0, intituleWdepsite: "Tous" });
        res.push(...await this.repoDepartements.find({ select: ['refWdepsite', 'intituleWdepsite'], where: { refsiteWdepsite }, order: { ordreWdepsite: 'ASC' } }));
        return { res };
    }
};
HelpersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(WebActeursSites_1.WebActeursSites)),
    __param(1, typeorm_2.InjectRepository(WebContrats_1.WebContrats)),
    __param(2, typeorm_2.InjectRepository(WebActeursSitesDepartements_1.WebActeursSitesDepartements)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], HelpersService);
exports.HelpersService = HelpersService;
exports.imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};
exports.editFileName = (req, file, callback) => {
    if (!fs.existsSync(exports.dir)) {
        fs.mkdirSync(exports.dir);
    }
    const name = uuid_1.v4();
    const fileExtName = path_1.extname(file.originalname);
    callback(null, `${name}${fileExtName}`);
};
exports.dir = './sources';
//# sourceMappingURL=helpers.service.js.map