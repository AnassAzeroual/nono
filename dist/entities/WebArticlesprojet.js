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
exports.WebArticlesprojet = void 0;
const typeorm_1 = require("typeorm");
let WebArticlesprojet = class WebArticlesprojet {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_artpweb" }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "refArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refacteur_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "refacteurArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refcontrat_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "refcontratArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "typemvt_artpweb", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "typemvtArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "reprojet_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "reprojetArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "projet_artpweb", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "projetArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refsite_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "refsiteArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "site_artpweb", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "siteArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refdep_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "refdepArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "departement_artpweb",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "departementArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refmetier_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "refmetierArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "metier_artpweb", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "metierArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "reffamniv1_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "reffamniv1Artpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "famniv1_artpweb", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "famniv1Artpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "reffamniv2_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "reffamniv2Artpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "famniv2_artpweb", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "famniv2Artpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "reffamniv3_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "reffamniv3Artpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "famniv3_artpweb", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "famniv3Artpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refarticle_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "refarticleArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refarticleprojet_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "refarticleprojetArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "codearticle_artpweb",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "codearticleArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "intitulearticle_artpweb",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "intitulearticleArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "genre_artpweb", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "genreArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "abrevcouleurdom_artpweb",
        nullable: true,
        length: 10,
    }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "abrevcouleurdomArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "couleur_artpweb", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "couleurArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "brand_artpweb", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "brandArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "specificites_artpweb",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "specificitesArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "reglechange_artpweb",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "reglechangeArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "taille_artpweb", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "tailleArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "qte_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "qteArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "tottrait_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "tottraitArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "totreparation_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "totreparationArtpweb", void 0);
__decorate([
    typeorm_1.Column("int", { name: "totreforme_artpweb", nullable: true }),
    __metadata("design:type", Number)
], WebArticlesprojet.prototype, "totreformeArtpweb", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_artpweb", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebArticlesprojet.prototype, "flagArtpweb", void 0);
WebArticlesprojet = __decorate([
    typeorm_1.Entity("web_articlesprojet", { schema: "auclairm_espaceclient" })
], WebArticlesprojet);
exports.WebArticlesprojet = WebArticlesprojet;
//# sourceMappingURL=WebArticlesprojet.js.map