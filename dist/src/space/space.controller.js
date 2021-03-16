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
exports.SpaceController = void 0;
const interface_query_1 = require("./../helpers/interface.query");
const get_user_decorator_1 = require("./../get-user.decorator");
const WebUsers_1 = require("./../../entities/WebUsers");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const space_service_1 = require("./space.service");
let SpaceController = class SpaceController {
    constructor(srv) {
        this.srv = srv;
    }
    getdata(query, body, user) {
        return this.srv.getAll(body, query, user.refacteurWuser);
    }
    getdataSites(user) {
        return this.srv.getSitesByRefActeur(user.refacteurWuser);
    }
    edit(id, user) {
        return this.srv.edit(id, user);
    }
};
__decorate([
    common_1.Post('/search'),
    __param(0, common_1.Query()), __param(1, common_1.Body()), __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interface_query_1.InterfaceQuery, Object, WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], SpaceController.prototype, "getdata", null);
__decorate([
    common_1.Get('/sites'),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], SpaceController.prototype, "getdataSites", null);
__decorate([
    common_1.Put('edit/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], SpaceController.prototype, "edit", null);
SpaceController = __decorate([
    common_1.Controller('space'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [space_service_1.SpaceService])
], SpaceController);
exports.SpaceController = SpaceController;
//# sourceMappingURL=space.controller.js.map