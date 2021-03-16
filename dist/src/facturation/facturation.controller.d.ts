import { WebUsers } from './../../entities/WebUsers';
import { FacturationService, QueryInterface } from './facturation.service';
export declare class FacturationController {
    private srv;
    constructor(srv: FacturationService);
    getLibsByIDs(id: string): Promise<unknown>;
    getSitesbyRefActeur(query: QueryInterface, user: WebUsers): Promise<unknown>;
}
