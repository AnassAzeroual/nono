"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivraisonModule = void 0;
const helpers_module_1 = require("./../../helpers/helpers.module");
const WebLivraisonsDetail_1 = require("./../../../entities/WebLivraisonsDetail");
const WebLivraisons_1 = require("./../../../entities/WebLivraisons");
const common_1 = require("@nestjs/common");
const livraison_controller_1 = require("./livraison.controller");
const livraison_service_1 = require("./livraison.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
let LivraisonModule = class LivraisonModule {
};
LivraisonModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebLivraisons_1.WebLivraisons, WebLivraisonsDetail_1.WebLivraisonsDetail]),
            helpers_module_1.HelpersModule
        ],
        controllers: [livraison_controller_1.LivraisonController],
        providers: [livraison_service_1.LivraisonService]
    })
], LivraisonModule);
exports.LivraisonModule = LivraisonModule;
//# sourceMappingURL=livraison.module.js.map