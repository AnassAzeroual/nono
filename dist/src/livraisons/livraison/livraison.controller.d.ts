import { InterfaceQuery, getReceptionObject } from './../../helpers/interface.query';
import { WebUsers } from './../../../entities/WebUsers';
import { LivraisonService } from './livraison.service';
export declare class LivraisonController {
    private srv;
    constructor(srv: LivraisonService);
    getArticle(refArticle: number, paginate: InterfaceQuery): Promise<unknown>;
    get(user: WebUsers, param: InterfaceQuery, body: getReceptionObject): Promise<unknown>;
}
