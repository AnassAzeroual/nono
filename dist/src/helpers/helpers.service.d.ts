import { WebActeursSitesDepartements } from './../../entities/WebActeursSitesDepartements';
import { WebContrats } from './../../entities/WebContrats';
import { Repository } from 'typeorm';
import { WebActeursSites } from './../../entities/WebActeursSites';
import { getReceptionObject } from './interface.query';
export declare class HelpersService {
    private repoSites;
    private repoContrats;
    private repoDepartements;
    constructor(repoSites: Repository<WebActeursSites>, repoContrats: Repository<WebContrats>, repoDepartements: Repository<WebActeursSitesDepartements>);
    fixDate(body: getReceptionObject): {
        start: any;
        end: any;
    };
    sites(refacteurWsiteacteur: number): Promise<unknown>;
    contrats(refacteurWcontrat: number): Promise<unknown>;
    departements(refacteurWdepsite: number): Promise<unknown>;
    departementsBySiteID(refsiteWdepsite: number): Promise<unknown>;
}
export declare const imageFileFilter: (req: any, file: any, callback: any) => any;
export declare const editFileName: (req: any, file: any, callback: any) => void;
export declare const dir = "./sources";
