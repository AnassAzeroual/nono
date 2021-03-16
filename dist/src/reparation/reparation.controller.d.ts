import { WebUsers } from './../../entities/WebUsers';
import { WebReparationsreformes } from './../../entities/WebReparationsreformes';
import { ReparationService } from './reparation.service';
import { Repository } from 'typeorm';
export declare class ReparationController {
    private srv;
    private repoWeb;
    constructor(srv: ReparationService, repoWeb: Repository<WebReparationsreformes>);
    getRepar(query: {
        cbarre: any;
        site: any;
        dep: any;
        skip: any;
        take: any;
        page: any;
    }, user: WebUsers): Promise<unknown>;
    getReparDemande(query: {
        codebarre: string;
        codeRepar: string;
    }): Promise<unknown>;
    getDemande(id: string, user: WebUsers): Promise<unknown>;
    saveDemande(body: unknown): Promise<unknown>;
    uploadMultipleFiles(files: any): Promise<unknown>;
}
