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
exports.WebContrats = void 0;
const typeorm_1 = require("typeorm");
let WebContrats = class WebContrats {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wcontrat" }),
    __metadata("design:type", Number)
], WebContrats.prototype, "refWcontrat", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refcontrat_wcontrat" }),
    __metadata("design:type", Number)
], WebContrats.prototype, "refcontratWcontrat", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refacteur_wcontrat", nullable: true }),
    __metadata("design:type", Number)
], WebContrats.prototype, "refacteurWcontrat", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "entretien_wcontrat", nullable: true, length: 10 }),
    __metadata("design:type", String)
], WebContrats.prototype, "entretienWcontrat", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "location_wcontrat", nullable: true, length: 10 }),
    __metadata("design:type", String)
], WebContrats.prototype, "locationWcontrat", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "code_wcontrat", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebContrats.prototype, "codeWcontrat", void 0);
__decorate([
    typeorm_1.Column("date", { name: "date_wcontrat", nullable: true }),
    __metadata("design:type", String)
], WebContrats.prototype, "dateWcontrat", void 0);
__decorate([
    typeorm_1.Column("date", { name: "datemiseenplace_wcontrat", nullable: true }),
    __metadata("design:type", String)
], WebContrats.prototype, "datemiseenplaceWcontrat", void 0);
__decorate([
    typeorm_1.Column("date", { name: "du_wcontrat", nullable: true }),
    __metadata("design:type", String)
], WebContrats.prototype, "duWcontrat", void 0);
__decorate([
    typeorm_1.Column("date", { name: "au_wcontrat", nullable: true }),
    __metadata("design:type", String)
], WebContrats.prototype, "auWcontrat", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "minicontratpar_wcontrat",
        nullable: true,
        length: 5,
        default: () => "'M'",
    }),
    __metadata("design:type", String)
], WebContrats.prototype, "minicontratparWcontrat", void 0);
__decorate([
    typeorm_1.Column("double", {
        name: "htminicontrat_wcontrat",
        nullable: true,
        precision: 22,
    }),
    __metadata("design:type", Number)
], WebContrats.prototype, "htminicontratWcontrat", void 0);
__decorate([
    typeorm_1.Column("text", { name: "note_wcontrat", nullable: true }),
    __metadata("design:type", String)
], WebContrats.prototype, "noteWcontrat", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "etat_wcontrat", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebContrats.prototype, "etatWcontrat", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wcontrat", length: 5 }),
    __metadata("design:type", String)
], WebContrats.prototype, "flagWcontrat", void 0);
__decorate([
    typeorm_1.Column("int", { name: "dureecontratmois_wcontrat" }),
    __metadata("design:type", Number)
], WebContrats.prototype, "dureecontratmoisWcontrat", void 0);
WebContrats = __decorate([
    typeorm_1.Entity("web_contrats", { schema: "auclairm_espaceclient" })
], WebContrats);
exports.WebContrats = WebContrats;
//# sourceMappingURL=WebContrats.js.map