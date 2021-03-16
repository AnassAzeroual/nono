import { WebUsers } from './../../../entities/WebUsers';
import { InterfaceQuery } from '../../helpers/interface.query';
import { HabillementproService } from './habillementpro.service';
import search, { InterfaceUpdateTaille } from './interface';
export declare class HabillementproController {
    private srv;
    constructor(srv: HabillementproService);
    getdataFilter(user: WebUsers): Promise<unknown>;
    getdataQRs(user: WebUsers, id: string): Promise<unknown>;
    validateTaile(user: WebUsers): Promise<any>;
    getdata(query: InterfaceQuery, user: WebUsers, search: search): Promise<unknown>;
    updateTaille(data: InterfaceUpdateTaille): Promise<any>;
}
