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
exports.WebActeurs = void 0;
const typeorm_1 = require("typeorm");
let WebActeurs = class WebActeurs {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wacteur" }),
    __metadata("design:type", Number)
], WebActeurs.prototype, "refWacteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refacteur_wacteur", nullable: true }),
    __metadata("design:type", Number)
], WebActeurs.prototype, "refacteurWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "code_wacteur", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "codeWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "societe_wacteur", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "societeWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "adresse1_wacteur", nullable: true, length: 200 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "adresse1Wacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "adresse2_wacteur", nullable: true, length: 200 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "adresse2Wacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "localite_wacteur", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "localiteWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "cp_wacteur", nullable: true, length: 10 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "cpWacteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refpays_wacteur", nullable: true }),
    __metadata("design:type", Number)
], WebActeurs.prototype, "refpaysWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "tel_wacteur", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "telWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "emailsociete_wacteur",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], WebActeurs.prototype, "emailsocieteWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "siteweb_wacteur", nullable: true, length: 200 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "sitewebWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "plafond_wacteur", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "plafondWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "statutjuridique_wacteur",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], WebActeurs.prototype, "statutjuridiqueWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "patente_wacteur", nullable: true, length: 11 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "patenteWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "if_wacteur", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "ifWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "rc_wacteur", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "rcWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ice_wacteur", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "iceWacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wacteur", nullable: true, length: 1 }),
    __metadata("design:type", String)
], WebActeurs.prototype, "flagWacteur", void 0);
WebActeurs = __decorate([
    typeorm_1.Entity("web_acteurs", { schema: "auclairm_espaceclient" })
], WebActeurs);
exports.WebActeurs = WebActeurs;
//# sourceMappingURL=WebActeurs.js.map