import { WebUsers } from './../../../entities/WebUsers';
import { WebInfostoday } from './../../../entities/WebInfostoday';
import { Repository } from 'typeorm';
export declare class FonctionnelleInfosService {
    private repoWeb;
    constructor(repoWeb: Repository<WebInfostoday>);
    get(user: WebUsers): Promise<unknown>;
}
