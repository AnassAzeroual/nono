import { Repository } from 'typeorm';
import { InterfaceQuery } from './../../helpers/interface.query';
import { HelpersService } from './../../helpers/helpers.service';
import { getReceptionObject } from '../../helpers/interface.query';
import { WebReceptions } from './../../../entities/WebReceptions';
import { WebReceptionsDetail } from './../../../entities/WebReceptionsDetail';
export declare class ReceptionService {
    private repoWebR;
    private repoWebRDetails;
    private srvHelpers;
    constructor(repoWebR: Repository<WebReceptions>, repoWebRDetails: Repository<WebReceptionsDetail>, srvHelpers: HelpersService);
    getALL(refacteurWreception: number, param: InterfaceQuery, body: getReceptionObject): Promise<unknown>;
    getSites(id: number): Promise<unknown>;
    getArticleByID(id: number, { skip, take }: {
        skip: any;
        take: any;
    }): Promise<unknown>;
}
