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
exports.MoncompteController = void 0;
const WebUsers_1 = require("./../../entities/WebUsers");
const get_user_decorator_1 = require("./../get-user.decorator");
const moncompte_service_1 = require("./moncompte.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let MoncompteController = class MoncompteController {
    constructor(srv) {
        this.srv = srv;
    }
    async getActeur(user) {
        const res = await this.srv.getActeurInfos(user.refacteurWuser);
        return { res };
    }
    updateRefacteur(user, body) {
        return this.srv.update(user.refacteurWuser, body);
    }
};
__decorate([
    common_1.Get(),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], MoncompteController.prototype, "getActeur", null);
__decorate([
    common_1.Post(),
    __param(0, get_user_decorator_1.GetUser()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers, Object]),
    __metadata("design:returntype", Promise)
], MoncompteController.prototype, "updateRefacteur", null);
MoncompteController = __decorate([
    common_1.Controller('moncompte'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [moncompte_service_1.MoncompteService])
], MoncompteController);
exports.MoncompteController = MoncompteController;
//# sourceMappingURL=moncompte.controller.js.map