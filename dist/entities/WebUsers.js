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
exports.WebUsers = void 0;
const typeorm_1 = require("typeorm");
let WebUsers = class WebUsers {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wuser" }),
    __metadata("design:type", Number)
], WebUsers.prototype, "refWuser", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refacteur_wuser", nullable: true }),
    __metadata("design:type", Number)
], WebUsers.prototype, "refacteurWuser", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "intituleacteur_wuser",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebUsers.prototype, "intituleacteurWuser", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refuser_wuser", nullable: true }),
    __metadata("design:type", Number)
], WebUsers.prototype, "refuserWuser", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "login_wuser",
        nullable: true,
        unique: true,
        length: 20,
    }),
    __metadata("design:type", String)
], WebUsers.prototype, "loginWuser", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "password_wuser", nullable: true, length: 20 }),
    __metadata("design:type", String)
], WebUsers.prototype, "passwordWuser", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "nom_wuser", nullable: true, length: 100 }),
    __metadata("design:type", String)
], WebUsers.prototype, "nomWuser", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "prenom_wuser", length: 100 }),
    __metadata("design:type", String)
], WebUsers.prototype, "prenomWuser", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refsite_wuser", nullable: true }),
    __metadata("design:type", Number)
], WebUsers.prototype, "refsiteWuser", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refdep_wuser" }),
    __metadata("design:type", Number)
], WebUsers.prototype, "refdepWuser", void 0);
__decorate([
    typeorm_1.Column("int", { name: "refprofil_wuser", default: () => "'1'" }),
    __metadata("design:type", Number)
], WebUsers.prototype, "refprofilWuser", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "profil_wuser", nullable: true, length: 50 }),
    __metadata("design:type", String)
], WebUsers.prototype, "profilWuser", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "accesespace_wuser", nullable: true, length: 1 }),
    __metadata("design:type", String)
], WebUsers.prototype, "accesespaceWuser", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "accesportabilite_wuser",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], WebUsers.prototype, "accesportabiliteWuser", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "etat_wuser", length: 20 }),
    __metadata("design:type", String)
], WebUsers.prototype, "etatWuser", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "flag_wuser", nullable: true, length: 5 }),
    __metadata("design:type", String)
], WebUsers.prototype, "flagWuser", void 0);
WebUsers = __decorate([
    typeorm_1.Index("IDX_077c92e4809676aaf205c3178c", ["loginWuser"], { unique: true }),
    typeorm_1.Entity("web_users", { schema: "auclairm_espaceclient" })
], WebUsers);
exports.WebUsers = WebUsers;
//# sourceMappingURL=WebUsers.js.map