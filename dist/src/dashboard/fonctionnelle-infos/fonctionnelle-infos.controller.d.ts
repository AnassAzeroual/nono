import { WebUsers } from './../../../entities/WebUsers';
import { FonctionnelleInfosService } from './fonctionnelle-infos.service';
export declare class FonctionnelleInfosController {
    private srv;
    constructor(srv: FonctionnelleInfosService);
    getPassage(user: WebUsers): Promise<unknown>;
}
