import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WebUsers } from '../../entities/WebUsers';
import { Repository } from 'typeorm';

export class dtoSignup {

}

@Injectable()
export class AuthService {
    constructor(@InjectRepository(WebUsers) private repoWebUsers: Repository<WebUsers>) { }


    async signup(data) {

    }
}
