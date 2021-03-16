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
exports.WebPorteurs = void 0;
const typeorm_1 = require("typeorm");
let WebPorteurs = class WebPorteurs {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wdotporteur" }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "refWdotporteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refsite_wdotporteur", nullable: true }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "refsiteWdotporteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "codesite_wdotporteur",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], WebPorteurs.prototype, "codesiteWdotporteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refdep_wdotporteur", nullable: true }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "refdepWdotporteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "codedep_wdotporteur",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], WebPorteurs.prototype, "codedepWdotporteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refmetier_wdotporteur", nullable: true }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "refmetierWdotporteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "metier_wdotporteur",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], WebPorteurs.prototype, "metierWdotporteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refporteur_wdotporteur", nullable: true }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "refporteurWdotporteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refdotporteur_wdotporteur", nullable: true }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "refdotporteurWdotporteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "matricule_wdotporteur",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], WebPorteurs.prototype, "matriculeWdotporteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "nomprenom_wdotporteur",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], WebPorteurs.prototype, "nomprenomWdotporteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "genre_wdotporteur", nullable: true, length: 10 }),
    __metadata("design:type", String)
], WebPorteurs.prototype, "genreWdotporteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "article_ref_wdotporteur", nullable: true }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "articleRefWdotporteur", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "article_intitule_wdotporteur",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], WebPorteurs.prototype, "articleIntituleWdotporteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "qtepardotation_wdotporteur", nullable: true }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "qtepardotationWdotporteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refgrilletaille_wdotporteur", nullable: true }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "refgrilletailleWdotporteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "taille_wdotporteur", nullable: true, length: 10 }),
    __metadata("design:type", String)
], WebPorteurs.prototype, "tailleWdotporteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "etat_wdotporteur", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebPorteurs.prototype, "etatWdotporteur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wdotporteur", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebPorteurs.prototype, "flagWdotporteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refacteur_wdotporteur", nullable: true }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "refacteurWdotporteur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refcontrat_wdotporteur", nullable: true }),
    __metadata("design:type", Number)
], WebPorteurs.prototype, "refcontratWdotporteur", void 0);
WebPorteurs = __decorate([
    typeorm_1.Entity("web_porteurs", { schema: "auclairm_espaceclient" })
], WebPorteurs);
exports.WebPorteurs = WebPorteurs;
//# sourceMappingURL=WebPorteurs.js.map