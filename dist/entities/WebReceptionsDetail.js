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
exports.WebReceptionsDetail = void 0;
const typeorm_1 = require("typeorm");
let WebReceptionsDetail = class WebReceptionsDetail {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wdreception" }),
    __metadata("design:type", Number)
], WebReceptionsDetail.prototype, "refWdreception", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refbrc_wdreception", nullable: true }),
    __metadata("design:type", Number)
], WebReceptionsDetail.prototype, "refbrcWdreception", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "designationarticle_wdreception",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], WebReceptionsDetail.prototype, "designationarticleWdreception", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wdreception", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebReceptionsDetail.prototype, "flagWdreception", void 0);
__decorate([
    typeorm_1.Column("int", { name: "qte_wdreception", nullable: true }),
    __metadata("design:type", Number)
], WebReceptionsDetail.prototype, "qteWdreception", void 0);
WebReceptionsDetail = __decorate([
    typeorm_1.Entity("web_receptions_detail", { schema: "auclairm_espaceclient" })
], WebReceptionsDetail);
exports.WebReceptionsDetail = WebReceptionsDetail;
//# sourceMappingURL=WebReceptionsDetail.js.map