import { WebUsers } from './../../entities/WebUsers';
import { HelpersService } from './helpers.service';
export declare class HelpersController {
    private srv;
    constructor(srv: HelpersService);
    getSitesByRefActeur(user: WebUsers): Promise<unknown>;
    getcontratsByRefActeur(user: WebUsers): Promise<unknown>;
    getDepartementsByRefActeur(user: WebUsers): Promise<unknown>;
    getDepartementsBySiteID(id: number): Promise<unknown>;
}
