"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceModule = void 0;
const helpers_module_1 = require("./../helpers/helpers.module");
const WebActeursSitesDepartements_1 = require("./../../entities/WebActeursSitesDepartements");
const WebContrats_1 = require("./../../entities/WebContrats");
const WebUsers_1 = require("./../../entities/WebUsers");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const space_controller_1 = require("./space.controller");
const space_service_1 = require("./space.service");
const WebActeursSites_1 = require("./../../entities/WebActeursSites");
let SpaceModule = class SpaceModule {
};
SpaceModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebUsers_1.WebUsers, WebContrats_1.WebContrats, WebActeursSites_1.WebActeursSites, WebActeursSitesDepartements_1.WebActeursSitesDepartements]),
            helpers_module_1.HelpersModule
        ],
        controllers: [space_controller_1.SpaceController],
        providers: [space_service_1.SpaceService]
    })
], SpaceModule);
exports.SpaceModule = SpaceModule;
//# sourceMappingURL=space.module.js.map