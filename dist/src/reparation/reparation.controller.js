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
exports.ReparationController = void 0;
const WebUsers_1 = require("./../../entities/WebUsers");
const get_user_decorator_1 = require("./../get-user.decorator");
const WebReparationsreformes_1 = require("./../../entities/WebReparationsreformes");
const helpers_service_1 = require("./../helpers/helpers.service");
const reparation_service_1 = require("./reparation.service");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const passport_1 = require("@nestjs/passport");
let ReparationController = class ReparationController {
    constructor(srv, repoWeb) {
        this.srv = srv;
        this.repoWeb = repoWeb;
    }
    getRepar(query, user) {
        return this.srv.getByCodebarre(query, user.refacteurWuser);
    }
    getReparDemande(query) {
        console.log(query);
        return this.srv.getDemandebyCode(query);
    }
    getDemande(id, user) {
        return this.srv.demandeReparation(id, user.refacteurWuser);
    }
    async saveDemande(body) {
        return this.srv.saveDemande(body, body['codebarreWebrr']);
    }
    async uploadMultipleFiles(files) {
        const response = [];
        files.forEach(file => {
            const fileReponse = {
                originalname: file.originalname,
                filename: file.filename
            };
            response.push(fileReponse);
        });
        return response;
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()), __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], ReparationController.prototype, "getRepar", null);
__decorate([
    common_1.Get('/demande'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReparationController.prototype, "getReparDemande", null);
__decorate([
    common_1.Get('/demande/:id'),
    __param(0, common_1.Param('id')), __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, WebUsers_1.WebUsers]),
    __metadata("design:returntype", Promise)
], ReparationController.prototype, "getDemande", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReparationController.prototype, "saveDemande", null);
__decorate([
    common_1.Post('/multiple'),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('image', 20, {
        storage: multer_1.diskStorage({
            destination: helpers_service_1.dir,
            filename: helpers_service_1.editFileName,
        }),
        fileFilter: helpers_service_1.imageFileFilter,
    })),
    __param(0, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReparationController.prototype, "uploadMultipleFiles", null);
ReparationController = __decorate([
    common_1.Controller('reparation'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __param(1, typeorm_1.InjectRepository(WebReparationsreformes_1.WebReparationsreformes)),
    __metadata("design:paramtypes", [reparation_service_1.ReparationService, typeorm_2.Repository])
], ReparationController);
exports.ReparationController = ReparationController;
//# sourceMappingURL=reparation.controller.js.map