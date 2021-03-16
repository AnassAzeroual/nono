import { InterfaceQuery } from './../helpers/interface.query';
import { WebUsers } from './../../entities/WebUsers';
import { SpaceService } from './space.service';
export declare class SpaceController {
    private srv;
    constructor(srv: SpaceService);
    getdata(query: InterfaceQuery, body: {
        contrat: number;
        site: number;
        dept: number;
        metier: number;
    }, user: WebUsers): Promise<WebUsers[]>;
    getdataSites(user: WebUsers): Promise<unknown>;
    edit(id: number, user: WebUsers): Promise<unknown>;
}
