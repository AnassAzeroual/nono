"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouvementsModule = void 0;
const WebProgressColors_1 = require("./../../entities/WebProgressColors");
const WebContrats_1 = require("./../../entities/WebContrats");
const helpers_module_1 = require("./../helpers/helpers.module");
const WebMouvements_1 = require("./../../entities/WebMouvements");
const common_1 = require("@nestjs/common");
const mouvements_controller_1 = require("./mouvements.controller");
const mouvements_service_1 = require("./mouvements.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
let MouvementsModule = class MouvementsModule {
};
MouvementsModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebMouvements_1.WebMouvements, WebContrats_1.WebContrats, WebProgressColors_1.WebProgressColors]),
            helpers_module_1.HelpersModule
        ],
        controllers: [mouvements_controller_1.MouvementsController],
        providers: [mouvements_service_1.MouvementsService]
    })
], MouvementsModule);
exports.MouvementsModule = MouvementsModule;
//# sourceMappingURL=mouvements.module.js.map