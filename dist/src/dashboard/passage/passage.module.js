"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassageModule = void 0;
const WebPassages_1 = require("./../../../entities/WebPassages");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passage_controller_1 = require("./passage.controller");
const passage_service_1 = require("./passage.service");
const passport_1 = require("@nestjs/passport");
let PassageModule = class PassageModule {
};
PassageModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebPassages_1.WebPassages])
        ],
        controllers: [passage_controller_1.PassageController],
        providers: [passage_service_1.PassageService]
    })
], PassageModule);
exports.PassageModule = PassageModule;
//# sourceMappingURL=passage.module.js.map