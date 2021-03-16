import { WebFacturation } from './../../entities/WebFacturation';
import { Repository } from 'typeorm';
export declare class FacturationService {
    private repoWebFacture;
    constructor(repoWebFacture: Repository<WebFacturation>);
    searchFacture({ showAll, start, end, take, skip }: QueryInterface, acteurID: number): Promise<unknown>;
    getLibByID(id: string): Promise<unknown>;
}
export declare class QueryInterface {
    showAll: boolean;
    start: string;
    end: string;
    take: number;
    skip: number;
}
