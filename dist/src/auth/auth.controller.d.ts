import { AuthService } from './auth.service';
export declare class AuthController {
    private srvUser;
    constructor(srvUser: AuthService);
    signup(data: {
        login: string;
        password: string;
    }): Promise<{
        accessToken: string;
    }>;
}
