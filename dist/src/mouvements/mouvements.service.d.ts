import { WebProgressColors } from './../../entities/WebProgressColors';
import { WebContrats } from './../../entities/WebContrats';
import { WebMouvements } from './../../entities/WebMouvements';
import { Repository } from 'typeorm';
export declare class MouvementsService {
    private repoWeb;
    private repoWebContrat;
    private repoWebProgress;
    constructor(repoWeb: Repository<WebMouvements>, repoWebContrat: Repository<WebContrats>, repoWebProgress: Repository<WebProgressColors>);
    getMouveByCodeBarre({ skip, take, cbarre, detail }: {
        skip: any;
        take: any;
        cbarre: any;
        detail: any;
    }, refacteurWmvt: number): Promise<unknown>;
    progressBar(codebarre: string, idActeur: number): Promise<unknown>;
    private getPercentColors;
}
