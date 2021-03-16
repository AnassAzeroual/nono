"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_filter_1 = require("./http-exception.filter");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log('test');
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const allowedOrigins = [
        'http://localhost:4200',
        'https://auclair.000webhostapp.com'
    ];
    const corsOptions = {
        origin: (origin, callback) => {
            console.log(origin);
            if (allowedOrigins.includes(origin) || !origin) {
                callback(null, true);
            }
            else {
                callback(new Error('Origin not allowed by CORS'));
            }
        },
    };
    app.enableCors(Object.assign({}, corsOptions));
    const port = process.env.PORT || 3000;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map