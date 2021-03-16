import { WebUsers } from './../../../entities/WebUsers';
import { PassageService } from './passage.service';
export declare class PassageController {
    private srv;
    constructor(srv: PassageService);
    getPassage(user: WebUsers): Promise<unknown>;
}
