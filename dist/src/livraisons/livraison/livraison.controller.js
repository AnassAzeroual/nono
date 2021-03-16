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
exports.LivraisonController = void 0;
const interface_query_1 = require("./../../helpers/interface.query");
const get_user_decorator_1 = require("./../../get-user.decorator");
const WebUsers_1 = require("./../../../entities/WebUsers");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const livraison_service_1 = require("./livraison.service");
let LivraisonController = class LivraisonController {
    constructor(srv) {
        this.srv = srv;
    }
    getArticle(refArticle, paginate) {
        return this.srv.getArticleByID(refArticle, paginate);
    }
    get(user, param, body) {
        return this.srv.getALL(user.refacteurWuser, param, body);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, interface_query_1.InterfaceQuery]),
    __metadata("design:returntype", Promise)
], LivraisonController.prototype, "getArticle", null);
__decorate([
    common_1.Post(),
    __param(0, get_user_decorator_1.GetUser()), __param(1, common_1.Query()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WebUsers_1.WebUsers, interface_query_1.InterfaceQuery, interface_query_1.getReceptionObject]),
    __metadata("design:returntype", Promise)
], LivraisonController.prototype, "get", null);
LivraisonController = __decorate([
    common_1.Controller('livraison'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [livraison_service_1.LivraisonService])
], LivraisonController);
exports.LivraisonController = LivraisonController;
//# sourceMappingURL=livraison.controller.js.map