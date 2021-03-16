import { Repository } from "typeorm";
import { WebUsers } from "../../entities/WebUsers";
import { jwtPayload } from "./jwt-payload-interface";
declare const JwtStartegy_base: new (...args: any[]) => any;
export declare class JwtStartegy extends JwtStartegy_base {
    private repoWebUsers;
    constructor(repoWebUsers: Repository<WebUsers>);
    validate(payload: jwtPayload): Promise<WebUsers>;
}
export {};
