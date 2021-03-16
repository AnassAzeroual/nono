import { HelpersService } from './../../helpers/helpers.service';
import { getReceptionObject, InterfaceQuery } from './../../helpers/interface.query';
import { WebLivraisonsDetail } from './../../../entities/WebLivraisonsDetail';
import { WebLivraisons } from './../../../entities/WebLivraisons';
import { Repository } from 'typeorm';
export declare class LivraisonService {
    private repoLivraison;
    private repoDetails;
    private srvHelpers;
    constructor(repoLivraison: Repository<WebLivraisons>, repoDetails: Repository<WebLivraisonsDetail>, srvHelpers: HelpersService);
    getALL(clientID: number, param: InterfaceQuery, body: getReceptionObject): Promise<unknown>;
    getArticleByID(id: number, { skip, take }: {
        skip: any;
        take: any;
    }): Promise<unknown>;
}
