"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoncompteModule = void 0;
const helpers_module_1 = require("./../helpers/helpers.module");
const WebActeurs_1 = require("./../../entities/WebActeurs");
const common_1 = require("@nestjs/common");
const moncompte_controller_1 = require("./moncompte.controller");
const moncompte_service_1 = require("./moncompte.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
let MoncompteModule = class MoncompteModule {
};
MoncompteModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebActeurs_1.WebActeurs]),
            helpers_module_1.HelpersModule
        ],
        controllers: [moncompte_controller_1.MoncompteController],
        providers: [moncompte_service_1.MoncompteService]
    })
], MoncompteModule);
exports.MoncompteModule = MoncompteModule;
//# sourceMappingURL=moncompte.module.js.map