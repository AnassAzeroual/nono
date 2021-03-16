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
exports.WebPassages = void 0;
const typeorm_1 = require("typeorm");
let WebPassages = class WebPassages {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_passage" }),
    __metadata("design:type", Number)
], WebPassages.prototype, "refPassage", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refacteur_passage", nullable: true }),
    __metadata("design:type", Number)
], WebPassages.prototype, "refacteurPassage", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refsite_passage", nullable: true }),
    __metadata("design:type", Number)
], WebPassages.prototype, "refsitePassage", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "site_passage", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebPassages.prototype, "sitePassage", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "datetime_passage", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebPassages.prototype, "datetimePassage", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "heure_passage", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebPassages.prototype, "heurePassage", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "livraison_blanch_passage",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], WebPassages.prototype, "livraisonBlanchPassage", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "livraison_horsblanch_passage",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], WebPassages.prototype, "livraisonHorsblanchPassage", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "prochainpassage_passage",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], WebPassages.prototype, "prochainpassagePassage", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "link_passage", nullable: true, length: 200 }),
    __metadata("design:type", String)
], WebPassages.prototype, "linkPassage", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "visu_passage", nullable: true, length: 255 }),
    __metadata("design:type", String)
], WebPassages.prototype, "visuPassage", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_passage", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebPassages.prototype, "flagPassage", void 0);
WebPassages = __decorate([
    typeorm_1.Entity("web_passages", { schema: "auclairm_espaceclient" })
], WebPassages);
exports.WebPassages = WebPassages;
//# sourceMappingURL=WebPassages.js.map