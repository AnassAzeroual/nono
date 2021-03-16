"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturationModule = void 0;
const WebUsers_1 = require("./../../entities/WebUsers");
const helpers_module_1 = require("./../helpers/helpers.module");
const WebFacturation_1 = require("./../../entities/WebFacturation");
const common_1 = require("@nestjs/common");
const facturation_controller_1 = require("./facturation.controller");
const facturation_service_1 = require("./facturation.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
let FacturationModule = class FacturationModule {
};
FacturationModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebFacturation_1.WebFacturation, WebUsers_1.WebUsers]),
            helpers_module_1.HelpersModule
        ],
        controllers: [facturation_controller_1.FacturationController],
        providers: [facturation_service_1.FacturationService]
    })
], FacturationModule);
exports.FacturationModule = FacturationModule;
//# sourceMappingURL=facturation.module.js.map