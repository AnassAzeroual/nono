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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebInfostoday = void 0;
const typeorm_1 = require("typeorm");
let WebInfostoday = class WebInfostoday {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wtoday" }),
    __metadata("design:type", Number)
], WebInfostoday.prototype, "refWtoday", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refinfotoday_wtoday", nullable: true }),
    __metadata("design:type", Number)
], WebInfostoday.prototype, "refinfotodayWtoday", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ifal_wtoday", nullable: true, length: 10 }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "ifalWtoday", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "acteurs_wtoday", nullable: true, length: 500 }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "acteursWtoday", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "profils_wtoday", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "profilsWtoday", void 0);
__decorate([
    typeorm_1.Column("int", { name: "ordre_wtoday", nullable: true }),
    __metadata("design:type", Number)
], WebInfostoday.prototype, "ordreWtoday", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "titre_wtoday", nullable: true, length: 200 }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "titreWtoday", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "csstitre_wtoday", nullable: true, length: 300 }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "csstitreWtoday", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "picto_wtoday", nullable: true, length: 300 }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "pictoWtoday", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "detail_wtoday", nullable: true, length: 500 }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "detailWtoday", void 0);
__decorate([
    typeorm_1.Column("date", { name: "dpublication_wtoday", nullable: true }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "dpublicationWtoday", void 0);
__decorate([
    typeorm_1.Column("date", { name: "dexpiration_wtoday", nullable: true }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "dexpirationWtoday", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "etat_wtoday", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "etatWtoday", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wtoday", nullable: true, length: 1 }),
    __metadata("design:type", String)
], WebInfostoday.prototype, "flagWtoday", void 0);
WebInfostoday = __decorate([
    typeorm_1.Entity("web_infostoday", { schema: "auclairm_espaceclient" })
], WebInfostoday);
exports.WebInfostoday = WebInfostoday;
//# sourceMappingURL=WebInfostoday.js.map