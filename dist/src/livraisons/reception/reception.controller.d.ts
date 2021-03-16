import { getReceptionObject, InterfaceQuery } from './../../helpers/interface.query';
import { WebUsers } from './../../../entities/WebUsers';
import { ReceptionService } from './reception.service';
export declare class ReceptionController {
    private srv;
    constructor(srv: ReceptionService);
    getSitesbyRefActeur(user: WebUsers): Promise<unknown>;
    getArticle(refArticle: number, paginate: InterfaceQuery): Promise<unknown>;
    get(user: WebUsers, param: InterfaceQuery, body: getReceptionObject): Promise<unknown>;
}
