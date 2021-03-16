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
exports.FonctionnelleInfosController = void 0;
const WebUsers_1 = require("./../../../entities/WebUsers");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("./../../get-user.decorator");
const fonctionnelle_infos_service_1 = require("./fonctionnelle-infos.service");
let FonctionnelleInfosController = class FonctionnelleInfosController {
    constructor(srv) {
        this.srv = srv;
    }
    getPassage(user) {
        return this.srv.get(user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], FonctionnelleInfosController.prototype, "getPassage", null);
FonctionnelleInfosController = __decorate([
    common_1.Controller('fonctionnelle-infos'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [fonctionnelle_infos_service_1.FonctionnelleInfosService])
], FonctionnelleInfosController);
exports.FonctionnelleInfosController = FonctionnelleInfosController;
//# sourceMappingURL=fonctionnelle-infos.controller.js.map