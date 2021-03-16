import { WebUsers } from './../../entities/WebUsers';
import { MoncompteService } from './moncompte.service';
export declare class MoncompteController {
    private srv;
    constructor(srv: MoncompteService);
    getActeur(user: WebUsers): Promise<unknown>;
    updateRefacteur(user: WebUsers, body: unknown): Promise<unknown>;
}
