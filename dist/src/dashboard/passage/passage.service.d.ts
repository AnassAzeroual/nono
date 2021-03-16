import { WebUsers } from './../../../entities/WebUsers';
import { WebPassages } from './../../../entities/WebPassages';
import { Repository } from 'typeorm';
export declare class PassageService {
    private repoWeb;
    constructor(repoWeb: Repository<WebPassages>);
    getPassages(user: WebUsers): Promise<unknown>;
}
