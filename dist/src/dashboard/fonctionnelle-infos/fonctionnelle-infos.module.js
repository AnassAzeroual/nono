"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FonctionnelleInfosModule = void 0;
const WebInfostoday_1 = require("../../../entities/WebInfostoday");
const common_1 = require("@nestjs/common");
const fonctionnelle_infos_controller_1 = require("./fonctionnelle-infos.controller");
const fonctionnelle_infos_service_1 = require("./fonctionnelle-infos.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
let FonctionnelleInfosModule = class FonctionnelleInfosModule {
};
FonctionnelleInfosModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebInfostoday_1.WebInfostoday])
        ],
        controllers: [fonctionnelle_infos_controller_1.FonctionnelleInfosController],
        providers: [fonctionnelle_infos_service_1.FonctionnelleInfosService]
    })
], FonctionnelleInfosModule);
exports.FonctionnelleInfosModule = FonctionnelleInfosModule;
//# sourceMappingURL=fonctionnelle-infos.module.js.map