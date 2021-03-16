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
exports.HelpersController = void 0;
const get_user_decorator_1 = require("./../get-user.decorator");
const WebUsers_1 = require("./../../entities/WebUsers");
const helpers_service_1 = require("./helpers.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let HelpersController = class HelpersController {
    constructor(srv) {
        this.srv = srv;
    }
    getSitesByRefActeur(user) {
        return this.srv.sites(user.refacteurWuser);
    }
    getcontratsByRefActeur(user) {
        return this.srv.contrats(user.refacteurWuser);
    }
    getDepartementsByRefActeur(user) {
        return this.srv.departements(user.refacteurWuser);
    }
    getDepartementsBySiteID(id) {
        return this.srv.departementsBySiteID(id);
    }
};
__decorate([
    common_1.Get('/sites'),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], HelpersController.prototype, "getSitesByRefActeur", null);
__decorate([
    common_1.Get('/contrats'),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], HelpersController.prototype, "getcontratsByRefActeur", null);
__decorate([
    common_1.Get('/departements'),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], HelpersController.prototype, "getDepartementsByRefActeur", null);
__decorate([
    common_1.Get('/departements-by-site/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HelpersController.prototype, "getDepartementsBySiteID", null);
HelpersController = __decorate([
    common_1.Controller('helpers'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [helpers_service_1.HelpersService])
], HelpersController);
exports.HelpersController = HelpersController;
//# sourceMappingURL=helpers.controller.js.map