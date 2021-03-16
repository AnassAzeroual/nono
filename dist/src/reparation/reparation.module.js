"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReparationModule = void 0;
const helpers_module_1 = require("./../helpers/helpers.module");
const WebArticlesprojet_1 = require("./../../entities/WebArticlesprojet");
const WebReparationsreformes_1 = require("./../../entities/WebReparationsreformes");
const common_1 = require("@nestjs/common");
const reparation_controller_1 = require("./reparation.controller");
const reparation_service_1 = require("./reparation.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
let ReparationModule = class ReparationModule {
};
ReparationModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebReparationsreformes_1.WebReparationsreformes, WebArticlesprojet_1.WebArticlesprojet]),
            helpers_module_1.HelpersModule
        ],
        controllers: [reparation_controller_1.ReparationController],
        providers: [reparation_service_1.ReparationService]
    })
], ReparationModule);
exports.ReparationModule = ReparationModule;
//# sourceMappingURL=reparation.module.js.map