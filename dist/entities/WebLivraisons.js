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
exports.WebLivraisons = void 0;
const typeorm_1 = require("typeorm");
let WebLivraisons = class WebLivraisons {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wlivraison" }),
    __metadata("design:type", Number)
], WebLivraisons.prototype, "refWlivraison", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refbl_wlivraison", nullable: true }),
    __metadata("design:type", Number)
], WebLivraisons.prototype, "refblWlivraison", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "codebl_wlivraison", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebLivraisons.prototype, "codeblWlivraison", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "notesbl_wlivraison",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], WebLivraisons.prototype, "notesblWlivraison", void 0);
__decorate([
    typeorm_1.Column("date", { name: "datebl_wlivraison", nullable: true }),
    __metadata("design:type", String)
], WebLivraisons.prototype, "dateblWlivraison", void 0);
__decorate([
    typeorm_1.Column("int", { name: "totoarticlediff_wlivraison", nullable: true }),
    __metadata("design:type", Number)
], WebLivraisons.prototype, "totoarticlediffWlivraison", void 0);
__decorate([
    typeorm_1.Column("int", { name: "totpieces_wlivraison", nullable: true }),
    __metadata("design:type", Number)
], WebLivraisons.prototype, "totpiecesWlivraison", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "etatbl_wlivraison", nullable: true, length: 10 }),
    __metadata("design:type", String)
], WebLivraisons.prototype, "etatblWlivraison", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wlivraison", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebLivraisons.prototype, "flagWlivraison", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refclient_wlivraison", nullable: true }),
    __metadata("design:type", Number)
], WebLivraisons.prototype, "refclientWlivraison", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "site_wlivraison", length: 100 }),
    __metadata("design:type", String)
], WebLivraisons.prototype, "siteWlivraison", void 0);
WebLivraisons = __decorate([
    typeorm_1.Entity("web_livraisons", { schema: "auclairm_espaceclient" })
], WebLivraisons);
exports.WebLivraisons = WebLivraisons;
//# sourceMappingURL=WebLivraisons.js.map