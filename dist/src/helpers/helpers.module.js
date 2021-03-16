"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpersModule = void 0;
const WebActeursSitesDepartements_1 = require("./../../entities/WebActeursSitesDepartements");
const WebContrats_1 = require("./../../entities/WebContrats");
const WebActeursSites_1 = require("./../../entities/WebActeursSites");
const helpers_service_1 = require("./helpers.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const helpers_controller_1 = require("./helpers.controller");
const passport_1 = require("@nestjs/passport");
let HelpersModule = class HelpersModule {
};
HelpersModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([WebActeursSites_1.WebActeursSites, WebContrats_1.WebContrats, WebActeursSitesDepartements_1.WebActeursSitesDepartements]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' })
        ],
        exports: [helpers_service_1.HelpersService],
        providers: [helpers_service_1.HelpersService],
        controllers: [helpers_controller_1.HelpersController],
    })
], HelpersModule);
exports.HelpersModule = HelpersModule;
//# sourceMappingURL=helpers.module.js.map