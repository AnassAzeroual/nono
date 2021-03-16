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
exports.WebReparationsreformes = void 0;
const typeorm_1 = require("typeorm");
let WebReparationsreformes = class WebReparationsreformes {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_webrr" }),
    __metadata("design:type", Number)
], WebReparationsreformes.prototype, "refWebrr", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refrr_webrr", nullable: true }),
    __metadata("design:type", Number)
], WebReparationsreformes.prototype, "refrrWebrr", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refclient_webrr", nullable: true }),
    __metadata("design:type", Number)
], WebReparationsreformes.prototype, "refclientWebrr", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refcontrat_webrr", nullable: true }),
    __metadata("design:type", Number)
], WebReparationsreformes.prototype, "refcontratWebrr", void 0);
__decorate([
    typeorm_1.Column("int", { name: "num_webrr", nullable: true }),
    __metadata("design:type", Number)
], WebReparationsreformes.prototype, "numWebrr", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "codereparationreforme_webrr",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "codereparationreformeWebrr", void 0);
__decorate([
    typeorm_1.Column("date", { name: "ddemande_webrr", nullable: true }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "ddemandeWebrr", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "originedemande_webrr",
        length: 20,
        default: () => "'MYAUCLAIR'",
    }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "originedemandeWebrr", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refdemandepar_webrr", nullable: true }),
    __metadata("design:type", Number)
], WebReparationsreformes.prototype, "refdemandeparWebrr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "type_webrr", nullable: true, length: 15 }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "typeWebrr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "repar_type_webrr", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "reparTypeWebrr", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refserieetiq_webrr", nullable: true }),
    __metadata("design:type", Number)
], WebReparationsreformes.prototype, "refserieetiqWebrr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "codebarre_webrr", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "codebarreWebrr", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refporteur_webrr", nullable: true }),
    __metadata("design:type", Number)
], WebReparationsreformes.prototype, "refporteurWebrr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "porteur_webrr", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "porteurWebrr", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refarticleprojet_webrr", nullable: true }),
    __metadata("design:type", Number)
], WebReparationsreformes.prototype, "refarticleprojetWebrr", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "photo1_chemin_webrr",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "photo1CheminWebrr", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "photo2_chemin_webrr",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "photo2CheminWebrr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "description_webrr", nullable: true, length: 500 }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "descriptionWebrr", void 0);
__decorate([
    typeorm_1.Column("int", { name: "reform_newrefserieetiq_webrr", nullable: true }),
    __metadata("design:type", Number)
], WebReparationsreformes.prototype, "reformNewrefserieetiqWebrr", void 0);
__decorate([
    typeorm_1.Column("date", { name: "dcreation_rr", nullable: true }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "dcreationRr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "etat_rr", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "etatRr", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_webrr", nullable: true, length: 1 }),
    __metadata("design:type", String)
], WebReparationsreformes.prototype, "flagWebrr", void 0);
WebReparationsreformes = __decorate([
    typeorm_1.Entity("web_reparationsreformes", { schema: "auclairm_espaceclient" })
], WebReparationsreformes);
exports.WebReparationsreformes = WebReparationsreformes;
//# sourceMappingURL=WebReparationsreformes.js.map