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
exports.WebLivraisonsDetail = void 0;
const typeorm_1 = require("typeorm");
let WebLivraisonsDetail = class WebLivraisonsDetail {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wdlivraison" }),
    __metadata("design:type", Number)
], WebLivraisonsDetail.prototype, "refWdlivraison", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refbl_wdlivraison", nullable: true }),
    __metadata("design:type", Number)
], WebLivraisonsDetail.prototype, "refblWdlivraison", void 0);
__decorate([
    typeorm_1.Column("date", { name: "dbl_wdlivraison", nullable: true }),
    __metadata("design:type", String)
], WebLivraisonsDetail.prototype, "dblWdlivraison", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "designationarticle_wdlivraison",
        nullable: true,
        length: 150,
    }),
    __metadata("design:type", String)
], WebLivraisonsDetail.prototype, "designationarticleWdlivraison", void 0);
__decorate([
    typeorm_1.Column("int", { name: "qte_wdlivraison", nullable: true }),
    __metadata("design:type", Number)
], WebLivraisonsDetail.prototype, "qteWdlivraison", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wdlivraison", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebLivraisonsDetail.prototype, "flagWdlivraison", void 0);
WebLivraisonsDetail = __decorate([
    typeorm_1.Entity("web_livraisons_detail", { schema: "auclairm_espaceclient" })
], WebLivraisonsDetail);
exports.WebLivraisonsDetail = WebLivraisonsDetail;
//# sourceMappingURL=WebLivraisonsDetail.js.map