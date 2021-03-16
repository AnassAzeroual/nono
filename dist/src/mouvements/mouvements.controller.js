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
exports.MouvementsController = void 0;
const get_user_decorator_1 = require("./../get-user.decorator");
const WebUsers_1 = require("./../../entities/WebUsers");
const mouvements_service_1 = require("./mouvements.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let MouvementsController = class MouvementsController {
    constructor(srv) {
        this.srv = srv;
    }
    getByCode(user, query) {
        return this.srv.getMouveByCodeBarre(query, user.refacteurWuser);
    }
};
__decorate([
    common_1.Get(),
    __param(0, get_user_decorator_1.GetUser()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers, Object]),
    __metadata("design:returntype", Promise)
], MouvementsController.prototype, "getByCode", null);
MouvementsController = __decorate([
    common_1.Controller('mouvements'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [mouvements_service_1.MouvementsService])
], MouvementsController);
exports.MouvementsController = MouvementsController;
//# sourceMappingURL=mouvements.controller.js.map