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
exports.WebReceptions = void 0;
const typeorm_1 = require("typeorm");
let WebReceptions = class WebReceptions {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wreception" }),
    __metadata("design:type", Number)
], WebReceptions.prototype, "refWreception", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refbrc_wreception", nullable: true }),
    __metadata("design:type", Number)
], WebReceptions.prototype, "refbrcWreception", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "codebrc_wreception", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebReceptions.prototype, "codebrcWreception", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "site_wreception", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebReceptions.prototype, "siteWreception", void 0);
__decorate([
    typeorm_1.Column("int", { name: "totpieces_wreception", nullable: true }),
    __metadata("design:type", Number)
], WebReceptions.prototype, "totpiecesWreception", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "etatbrc_wreception", nullable: true, length: 10 }),
    __metadata("design:type", String)
], WebReceptions.prototype, "etatbrcWreception", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wreception", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebReceptions.prototype, "flagWreception", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refacteur_wreception", nullable: true }),
    __metadata("design:type", Number)
], WebReceptions.prototype, "refacteurWreception", void 0);
__decorate([
    typeorm_1.Column("date", { name: "dbrc_wreception", nullable: true }),
    __metadata("design:type", String)
], WebReceptions.prototype, "dbrcWreception", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refsite_wreception", nullable: true }),
    __metadata("design:type", Number)
], WebReceptions.prototype, "refsiteWreception", void 0);
WebReceptions = __decorate([
    typeorm_1.Entity("web_receptions", { schema: "auclairm_espaceclient" })
], WebReceptions);
exports.WebReceptions = WebReceptions;
//# sourceMappingURL=WebReceptions.js.map