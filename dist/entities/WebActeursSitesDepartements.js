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
exports.WebActeursSitesDepartements = void 0;
const typeorm_1 = require("typeorm");
let WebActeursSitesDepartements = class WebActeursSitesDepartements {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wdepsite" }),
    __metadata("design:type", Number)
], WebActeursSitesDepartements.prototype, "refWdepsite", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refacteur_wdepsite", nullable: true }),
    __metadata("design:type", Number)
], WebActeursSitesDepartements.prototype, "refacteurWdepsite", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refsite_wdepsite", nullable: true }),
    __metadata("design:type", Number)
], WebActeursSitesDepartements.prototype, "refsiteWdepsite", void 0);
__decorate([
    typeorm_1.Column("int", { name: "ordre_wdepsite", nullable: true }),
    __metadata("design:type", Number)
], WebActeursSitesDepartements.prototype, "ordreWdepsite", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "intitule_wdepsite", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebActeursSitesDepartements.prototype, "intituleWdepsite", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "abrev_wdepsite", nullable: true, length: 8 }),
    __metadata("design:type", String)
], WebActeursSitesDepartements.prototype, "abrevWdepsite", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wdepsite", nullable: true, length: 3 }),
    __metadata("design:type", String)
], WebActeursSitesDepartements.prototype, "flagWdepsite", void 0);
WebActeursSitesDepartements = __decorate([
    typeorm_1.Entity("web_acteurs_sites_departements", { schema: "auclairm_espaceclient" })
], WebActeursSitesDepartements);
exports.WebActeursSitesDepartements = WebActeursSitesDepartements;
//# sourceMappingURL=WebActeursSitesDepartements.js.map