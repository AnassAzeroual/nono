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
exports.WebProfilsdroitscontact = void 0;
const typeorm_1 = require("typeorm");
let WebProfilsdroitscontact = class WebProfilsdroitscontact {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ref_wprofildroits" }),
    __metadata("design:type", Number)
], WebProfilsdroitscontact.prototype, "refWprofildroits", void 0);
__decorate([
    typeorm_1.Column("int", { name: "numdroit_wprofildroits", nullable: true }),
    __metadata("design:type", Number)
], WebProfilsdroitscontact.prototype, "numdroitWprofildroits", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "description_wprofildroits",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], WebProfilsdroitscontact.prototype, "descriptionWprofildroits", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "myauclair_wprofildroits",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], WebProfilsdroitscontact.prototype, "myauclairWprofildroits", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "portabilite_wprofildroits",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], WebProfilsdroitscontact.prototype, "portabiliteWprofildroits", void 0);
WebProfilsdroitscontact = __decorate([
    typeorm_1.Entity("web_profilsdroitscontact", { schema: "auclairm_espaceclient" })
], WebProfilsdroitscontact);
exports.WebProfilsdroitscontact = WebProfilsdroitscontact;
//# sourceMappingURL=WebProfilsdroitscontact.js.map