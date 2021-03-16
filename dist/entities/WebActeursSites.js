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
exports.WebActeursSites = void 0;
const typeorm_1 = require("typeorm");
let WebActeursSites = class WebActeursSites {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wsiteacteur" }),
    __metadata("design:type", Number)
], WebActeursSites.prototype, "refWsiteacteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refacteur_wsiteacteur", nullable: true }),
    __metadata("design:type", Number)
], WebActeursSites.prototype, "refacteurWsiteacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "code_wsiteacteur", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebActeursSites.prototype, "codeWsiteacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "intitule_wsiteacteur",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebActeursSites.prototype, "intituleWsiteacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "adresse_wsiteacteur",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], WebActeursSites.prototype, "adresseWsiteacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "localite_wsiteacteur",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], WebActeursSites.prototype, "localiteWsiteacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "tel_wsiteacteur", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebActeursSites.prototype, "telWsiteacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "deporte_wsiteacteur", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebActeursSites.prototype, "deporteWsiteacteur", void 0);
__decorate([
    typeorm_1.Column("double", {
        name: "coutrajetaller_wsiteacteur",
        nullable: true,
        precision: 22,
    }),
    __metadata("design:type", Number)
], WebActeursSites.prototype, "coutrajetallerWsiteacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "livraison_wsiteacteur",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], WebActeursSites.prototype, "livraisonWsiteacteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wsiteacteur", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebActeursSites.prototype, "flagWsiteacteur", void 0);
WebActeursSites = __decorate([
    typeorm_1.Entity("web_acteurs_sites", { schema: "auclairm_espaceclient" })
], WebActeursSites);
exports.WebActeursSites = WebActeursSites;
//# sourceMappingURL=WebActeursSites.js.map