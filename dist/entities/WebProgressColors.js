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
exports.WebProgressColors = void 0;
const typeorm_1 = require("typeorm");
let WebProgressColors = class WebProgressColors {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], WebProgressColors.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int", { name: "id_acteur" }),
    __metadata("design:type", Number)
], WebProgressColors.prototype, "idActeur", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "controlleur", length: 20 }),
    __metadata("design:type", String)
], WebProgressColors.prototype, "controlleur", void 0);
__decorate([
    typeorm_1.Column("int", { name: "to_percent", default: () => "'50'" }),
    __metadata("design:type", Number)
], WebProgressColors.prototype, "toPercent", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "color_hex",
        length: 20,
        default: () => "'w3-green'",
    }),
    __metadata("design:type", String)
], WebProgressColors.prototype, "colorHex", void 0);
WebProgressColors = __decorate([
    typeorm_1.Entity("web_progress_colors", { schema: "auclairm_espaceclient" })
], WebProgressColors);
exports.WebProgressColors = WebProgressColors;
//# sourceMappingURL=WebProgressColors.js.map