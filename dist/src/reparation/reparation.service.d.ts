import { WebArticlesprojet } from './../../entities/WebArticlesprojet';
import { Repository } from 'typeorm';
import { WebReparationsreformes } from '../../entities/WebReparationsreformes';
export declare class ReparationService {
    private repoWeb;
    private repoWebArticlesprojet;
    constructor(repoWeb: Repository<WebReparationsreformes>, repoWebArticlesprojet: Repository<WebArticlesprojet>);
    getByCodebarre({ cbarre, site, dep, skip, take, page }: {
        cbarre: any;
        site: any;
        dep: any;
        skip: any;
        take: any;
        page: any;
    }, idActeur: number): Promise<unknown>;
    private queryParams;
    private queryParamsCounts;
    getDemandebyCode({ codeRepar }: {
        codeRepar: any;
    }): Promise<unknown>;
    saveDemande(newData: unknown, ccbarre: string): Promise<unknown>;
    demandeReparation(code: string, id: number): Promise<unknown>;
}
