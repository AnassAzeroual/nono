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
exports.ParamListeMetiers = void 0;
const typeorm_1 = require("typeorm");
let ParamListeMetiers = class ParamListeMetiers {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_metier" }),
    __metadata("design:type", Number)
], ParamListeMetiers.prototype, "refMetier", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "intitule_metier", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ParamListeMetiers.prototype, "intituleMetier", void 0);
ParamListeMetiers = __decorate([
    typeorm_1.Entity("param_liste_metiers", { schema: "auclairm_espaceclient" })
], ParamListeMetiers);
exports.ParamListeMetiers = ParamListeMetiers;
//# sourceMappingURL=ParamListeMetiers.js.map