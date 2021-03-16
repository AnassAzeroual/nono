"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContartsModule = void 0;
const WebContrats_1 = require("./../../entities/WebContrats");
const common_1 = require("@nestjs/common");
const contarts_controller_1 = require("./contarts.controller");
const contarts_service_1 = require("./contarts.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
let ContartsModule = class ContartsModule {
};
ContartsModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebContrats_1.WebContrats]),
        ],
        controllers: [contarts_controller_1.ContartsController],
        providers: [contarts_service_1.ContartsService]
    })
], ContartsModule);
exports.ContartsModule = ContartsModule;
//# sourceMappingURL=contarts.module.js.map