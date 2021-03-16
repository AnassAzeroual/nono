import { WebUsers } from './../../entities/WebUsers';
import { InterfaceQuery } from './../helpers/interface.query';
import { Repository } from 'typeorm';
export declare class SpaceService {
    private repoWebUsers;
    constructor(repoWebUsers: Repository<WebUsers>);
    getAll(search: {
        contrat: number | string;
        site: number | string;
        dept: number | string;
        metier: number | string;
    }, paginate: InterfaceQuery, refacteurWuser: number): Promise<any>;
    private buildSpace;
    getSitesByRefActeur(refacteurWuser: number): Promise<any>;
    getUserByID(id: number): Promise<WebUsers>;
    edit(id: number, data: WebUsers): Promise<unknown>;
}
