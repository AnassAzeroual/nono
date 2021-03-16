"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceptionModule = void 0;
const helpers_module_1 = require("./../../helpers/helpers.module");
const WebReceptionsDetail_1 = require("./../../../entities/WebReceptionsDetail");
const WebReceptions_1 = require("./../../../entities/WebReceptions");
const common_1 = require("@nestjs/common");
const reception_controller_1 = require("./reception.controller");
const reception_service_1 = require("./reception.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
let ReceptionModule = class ReceptionModule {
};
ReceptionModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forFeature([WebReceptions_1.WebReceptions, WebReceptionsDetail_1.WebReceptionsDetail]),
            helpers_module_1.HelpersModule
        ],
        controllers: [reception_controller_1.ReceptionController],
        providers: [reception_service_1.ReceptionService]
    })
], ReceptionModule);
exports.ReceptionModule = ReceptionModule;
//# sourceMappingURL=reception.module.js.map