"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabillementproModule = void 0;
const WebMouvements_1 = require("./../../../entities/WebMouvements");
const ParamListeTailles_1 = require("./../../../entities/ParamListeTailles");
const WebPorteurs_1 = require("./../../../entities/WebPorteurs");
const common_1 = require("@nestjs/common");
const habillementpro_controller_1 = require("./habillementpro.controller");
const habillementpro_service_1 = require("./habillementpro.service");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
let HabillementproModule = class HabillementproModule {
};
HabillementproModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebPorteurs_1.WebPorteurs, ParamListeTailles_1.ParamListeTailles, WebMouvements_1.WebMouvements]),
        ],
        controllers: [habillementpro_controller_1.HabillementproController],
        providers: [habillementpro_service_1.HabillementproService]
    })
], HabillementproModule);
exports.HabillementproModule = HabillementproModule;
//# sourceMappingURL=habillementpro.module.js.map