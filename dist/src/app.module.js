"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const helpers_service_1 = require("./helpers/helpers.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const passage_module_1 = require("./dashboard/passage/passage.module");
const fonctionnelle_infos_module_1 = require("./dashboard/fonctionnelle-infos/fonctionnelle-infos.module");
const habillementpro_module_1 = require("./prestations/habillementpro/habillementpro.module");
const core_1 = require("@nestjs/core");
const http_exception_filter_1 = require("./http-exception.filter");
const space_module_1 = require("./space/space.module");
const livraison_module_1 = require("./livraisons/livraison/livraison.module");
const reception_module_1 = require("./livraisons/reception/reception.module");
const helpers_module_1 = require("./helpers/helpers.module");
const moncompte_module_1 = require("./moncompte/moncompte.module");
const mouvements_module_1 = require("./mouvements/mouvements.module");
const reparation_module_1 = require("./reparation/reparation.module");
const platform_express_1 = require("@nestjs/platform-express");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const facturation_module_1 = require("./facturation/facturation.module");
const contarts_module_1 = require("./contarts/contarts.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            platform_express_1.MulterModule.register({
                dest: helpers_service_1.dir,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'sources'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                "type": "mariadb",
                "host": "b9omf6ziddw3fdjfsbrr-mysql.services.clever-cloud.com",
                "port": 3306,
                "username": "usucikudzvk7xcyv",
                "password": "WnNyQbnjDaXdHcMTimRE",
                "database": "b9omf6ziddw3fdjfsbrr",
                "synchronize": false,
                "entities": [
                    "./entities/*{.ts,.js}"
                ]
            }),
            auth_module_1.AuthModule,
            passage_module_1.PassageModule,
            fonctionnelle_infos_module_1.FonctionnelleInfosModule,
            habillementpro_module_1.HabillementproModule,
            space_module_1.SpaceModule,
            livraison_module_1.LivraisonModule,
            reception_module_1.ReceptionModule,
            helpers_module_1.HelpersModule,
            moncompte_module_1.MoncompteModule,
            mouvements_module_1.MouvementsModule,
            reparation_module_1.ReparationModule,
            facturation_module_1.FacturationModule,
            contarts_module_1.ContartsModule
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.HttpExceptionFilter,
            }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map