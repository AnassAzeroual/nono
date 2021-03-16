import { WebActeurs } from './../../entities/WebActeurs';
import { Repository } from 'typeorm';
export declare class MoncompteService {
    private repoWebActeur;
    constructor(repoWebActeur: Repository<WebActeurs>);
    getActeurInfos(refacteurWacteur: number): Promise<unknown>;
    update(refacteurWacteur: number, newData: unknown): Promise<unknown>;
}
