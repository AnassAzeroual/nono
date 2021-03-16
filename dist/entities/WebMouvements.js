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
exports.WebMouvements = void 0;
const typeorm_1 = require("typeorm");
let WebMouvements = class WebMouvements {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wmvt" }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "refWmvt", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refmvt_wmvt", nullable: true }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "refmvtWmvt", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "refacteur_wmvt",
        nullable: true,
        default: () => "'1'",
    }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "refacteurWmvt", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refcontrat_wmvt", nullable: true }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "refcontratWmvt", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refsite_wmvt", nullable: true }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "refsiteWmvt", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refdep_wmvt", nullable: true }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "refdepWmvt", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "gtype_wmvt", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebMouvements.prototype, "gtypeWmvt", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "type_wmvt", nullable: true, length: 8 }),
    __metadata("design:type", String)
], WebMouvements.prototype, "typeWmvt", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "refpiece_wmvt",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "refpieceWmvt", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "intitulepiece_wmvt",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebMouvements.prototype, "intitulepieceWmvt", void 0);
__decorate([
    typeorm_1.Column("date", { name: "dpiece_wmvt", nullable: true }),
    __metadata("design:type", String)
], WebMouvements.prototype, "dpieceWmvt", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "refporteur_wmvt", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebMouvements.prototype, "refporteurWmvt", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refserieetiq_wmvt", nullable: true }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "refserieetiqWmvt", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "cbarre_wmvt", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebMouvements.prototype, "cbarreWmvt", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refarticlep_wmvt", nullable: true }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "refarticlepWmvt", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "designarticlep_wmvt",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebMouvements.prototype, "designarticlepWmvt", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "intitulecond_wmvt", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebMouvements.prototype, "intitulecondWmvt", void 0);
__decorate([
    typeorm_1.Column("int", { name: "nbrepiecesparcond_wmvt", nullable: true }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "nbrepiecesparcondWmvt", void 0);
__decorate([
    typeorm_1.Column("int", { name: "qtecond_wmvt", nullable: true }),
    __metadata("design:type", Number)
], WebMouvements.prototype, "qtecondWmvt", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "note_wmvt", nullable: true, length: 200 }),
    __metadata("design:type", String)
], WebMouvements.prototype, "noteWmvt", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wmvt", nullable: true, length: 10 }),
    __metadata("design:type", String)
], WebMouvements.prototype, "flagWmvt", void 0);
WebMouvements = __decorate([
    typeorm_1.Entity("web_mouvements", { schema: "auclairm_espaceclient" })
], WebMouvements);
exports.WebMouvements = WebMouvements;
//# sourceMappingURL=WebMouvements.js.map