import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { WebUsers } from '../../entities/WebUsers';
import * as bcrypt from 'bcrypt'
import { jwtPayload } from './jwt-payload-interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(WebUsers) private repoWebUsers: Repository<WebUsers>,
        private srvJWT: JwtService
    ) { }

    /* -------------------------------------------------------------------------- */
    /*                                    login                                   */
    /* -------------------------------------------------------------------------- */
    async signup(data): Promise<{ accessToken: string }> {
        // const salt = await bcrypt.genSalt(); // Not now

        const res = await this.repoWebUsers.findAndCount({ where: { loginWuser: data.login, passwordWuser: data.password } });
        let exist = res[1]
        const check = (exist === 1) ? true : false
        if (!check) {
            throw new UnauthorizedException('Invalid Credentials!')
        }
        let user = res[0][0]
        const payload: jwtPayload = {
            login: user.loginWuser,
            name: `${user.nomWuser} ${user.prenomWuser}`,
            role: (user.refprofilWuser === 3) ? 'admin' : (user.refprofilWuser === 0) ? 'client' : 'lol'
        }
        const accessToken = await this.srvJWT.sign(payload)
        return { accessToken }
    }

    /* -------------------------------------------------------------------------- */
    /*                                Hash Password                               */
    /* -------------------------------------------------------------------------- */
    private async hashPassword(pass: string, salt: string) {
        return await bcrypt.hash(pass, salt)
    }
}
