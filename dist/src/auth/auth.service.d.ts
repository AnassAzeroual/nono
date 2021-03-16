import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { WebUsers } from '../../entities/WebUsers';
export declare class AuthService {
    private repoWebUsers;
    private srvJWT;
    constructor(repoWebUsers: Repository<WebUsers>, srvJWT: JwtService);
    signup(data: {
        login: string;
        password: string;
    }): Promise<{
        accessToken: string;
    }>;
    private hashPassword;
}
