"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStartegy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const passport_jwt_1 = require("passport-jwt");
const typeorm_2 = require("typeorm");
const WebUsers_1 = require("../../entities/WebUsers");
let JwtStartegy = class JwtStartegy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(repoWebUsers) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'eyJsb2dpbiI6InIiLCJuYW1lIjoiTEFCUkFETyBSVUJFTiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMTU1MzI4OSwiZXhwIjoxNjAxNTU2ODg5fQ'
        });
        this.repoWebUsers = repoWebUsers;
    }
    validate(payload) {
        const { login } = payload;
        const user = this.repoWebUsers.findOne({ loginWuser: login });
        if (!user)
            throw new common_1.UnauthorizedException();
        return user;
    }
};
JwtStartegy = __decorate([
    __param(0, typeorm_1.InjectRepository(WebUsers_1.WebUsers)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JwtStartegy);
exports.JwtStartegy = JwtStartegy;
//# sourceMappingURL=jwt.startegy.js.map