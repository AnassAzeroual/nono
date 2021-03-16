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
exports.WebFacturation = void 0;
const typeorm_1 = require("typeorm");
let WebFacturation = class WebFacturation {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wfact" }),
    __metadata("design:type", Number)
], WebFacturation.prototype, "refWfact", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refacteur_wfact", nullable: true }),
    __metadata("design:type", Number)
], WebFacturation.prototype, "refacteurWfact", void 0);
__decorate([
    typeorm_1.Column("int", { name: "reffact_wfact", nullable: true }),
    __metadata("design:type", Number)
], WebFacturation.prototype, "reffactWfact", void 0);
__decorate([
    typeorm_1.Column("int", { name: "annee_wfact", nullable: true }),
    __metadata("design:type", Number)
], WebFacturation.prototype, "anneeWfact", void 0);
__decorate([
    typeorm_1.Column("date", { name: "date_wfact", nullable: true }),
    __metadata("design:type", String)
], WebFacturation.prototype, "dateWfact", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "typefact_wfact", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebFacturation.prototype, "typefactWfact", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "code_wfact", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebFacturation.prototype, "codeWfact", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refcontrat_wfact", nullable: true }),
    __metadata("design:type", Number)
], WebFacturation.prototype, "refcontratWfact", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "ligneun_wfact", nullable: true, length: 200 }),
    __metadata("design:type", String)
], WebFacturation.prototype, "ligneunWfact", void 0);
__decorate([
    typeorm_1.Column("double", { name: "ttc_wfact", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], WebFacturation.prototype, "ttcWfact", void 0);
__decorate([
    typeorm_1.Column("date", { name: "decheance_wfact", nullable: true }),
    __metadata("design:type", String)
], WebFacturation.prototype, "decheanceWfact", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "listebl_wfact", nullable: true, length: 500 }),
    __metadata("design:type", String)
], WebFacturation.prototype, "listeblWfact", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "etat_wfact", nullable: true, length: 10 }),
    __metadata("design:type", String)
], WebFacturation.prototype, "etatWfact", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "detailencaisse_wfact",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], WebFacturation.prototype, "detailencaisseWfact", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wfact", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebFacturation.prototype, "flagWfact", void 0);
WebFacturation = __decorate([
    typeorm_1.Entity("web_facturation", { schema: "auclairm_espaceclient" })
], WebFacturation);
exports.WebFacturation = WebFacturation;
//# sourceMappingURL=WebFacturation.js.map