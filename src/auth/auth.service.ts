import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm';
import { WebUsers } from '../../entities/WebUsers';
import { Repository } from 'typeorm';
export class dtoSignup {

}

@Injectable()
export class AuthService {
    constructor(@InjectRepository(WebUsers) private repoWebUsers: Repository<WebUsers>) { }

    /* -------------------------------------------------------------------------- */
    /*                                    login                                   */
    /* -------------------------------------------------------------------------- */
    async signup(data): Promise<any> {
        const salt = await bcrypt.genSalt();
        console.log(salt);
        return

        const exist = await this.repoWebUsers.count({ where: { loginWuser: data.login, passwordWuser: data.password } });
        const check = (exist === 1) ? true : false
        return { token: check }
    }

    /* -------------------------------------------------------------------------- */
    /*                                Hash Password                               */
    /* -------------------------------------------------------------------------- */
    private async hashPassword(pass: string, salt: string) {
        return await bcrypt.hash(pass, salt)
    }
}
