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
exports.HabillementproController = void 0;
const get_user_decorator_1 = require("./../../get-user.decorator");
const WebUsers_1 = require("./../../../entities/WebUsers");
const interface_query_1 = require("../../helpers/interface.query");
const habillementpro_service_1 = require("./habillementpro.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const interface_1 = require("./interface");
let HabillementproController = class HabillementproController {
    constructor(srv) {
        this.srv = srv;
    }
    getdataFilter(user) {
        return this.srv.getFilterData(user.refacteurWuser);
    }
    getdataQRs(user, id) {
        return this.srv.getdataQRs(user.refacteurWuser, id);
    }
    validateTaile(user) {
        return this.srv.saveProd(user.refacteurWuser);
    }
    getdata(query, user, search) {
        return this.srv.search(query, user.refacteurWuser, search);
    }
    updateTaille(data) {
        return this.srv.updateTaille(data);
    }
};
__decorate([
    common_1.Get('/filter'),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], HabillementproController.prototype, "getdataFilter", null);
__decorate([
    common_1.Get('/qr/:id'),
    __param(0, get_user_decorator_1.GetUser()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers, String]),
    __metadata("design:returntype", Promise)
], HabillementproController.prototype, "getdataQRs", null);
__decorate([
    common_1.Get('/save'),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], HabillementproController.prototype, "validateTaile", null);
__decorate([
    common_1.Post('/search'),
    __param(0, common_1.Query()), __param(1, get_user_decorator_1.GetUser()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interface_query_1.InterfaceQuery, WebUsers_1.WebUsers, Object]),
    __metadata("design:returntype", Promise)
], HabillementproController.prototype, "getdata", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interface_1.InterfaceUpdateTaille]),
    __metadata("design:returntype", Promise)
], HabillementproController.prototype, "updateTaille", null);
HabillementproController = __decorate([
    common_1.Controller('habillementpro'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [habillementpro_service_1.HabillementproService])
], HabillementproController);
exports.HabillementproController = HabillementproController;
//# sourceMappingURL=habillementpro.controller.js.map