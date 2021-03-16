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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturationController = void 0;
const WebUsers_1 = require("./../../entities/WebUsers");
const get_user_decorator_1 = require("./../get-user.decorator");
const common_1 = require("@nestjs/common");
const facturation_service_1 = require("./facturation.service");
const passport_1 = require("@nestjs/passport");
let FacturationController = class FacturationController {
    constructor(srv) {
        this.srv = srv;
    }
    getLibsByIDs(id) {
        return this.srv.getLibByID(id);
    }
    getSitesbyRefActeur(query, user) {
        return this.srv.searchFacture(query, user.refacteurWuser);
    }
};
__decorate([
    common_1.Get(':ref'),
    __param(0, common_1.Param('ref')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacturationController.prototype, "getLibsByIDs", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [facturation_service_1.QueryInterface, WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], FacturationController.prototype, "getSitesbyRefActeur", null);
FacturationController = __decorate([
    common_1.Controller('facturation'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [facturation_service_1.FacturationService])
], FacturationController);
exports.FacturationController = FacturationController;
//# sourceMappingURL=facturation.controller.js.map