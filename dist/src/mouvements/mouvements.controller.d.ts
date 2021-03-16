import { WebUsers } from './../../entities/WebUsers';
import { MouvementsService } from './mouvements.service';
export declare class MouvementsController {
    private srv;
    constructor(srv: MouvementsService);
    getByCode(user: WebUsers, query: {
        skip: number;
        take: number;
        cbarre: string;
        detail: boolean;
    }): Promise<unknown>;
}
