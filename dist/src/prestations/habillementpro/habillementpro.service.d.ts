import { WebMouvements } from './../../../entities/WebMouvements';
import { ParamListeTailles } from './../../../entities/ParamListeTailles';
import { WebPorteurs } from './../../../entities/WebPorteurs';
import { InterfaceQuery } from '../../helpers/interface.query';
import { Repository } from 'typeorm';
import search, { InterfaceUpdateTaille } from './interface';
export declare class HabillementproService {
    private repoWebPorteurs;
    private repoParamListeTailles;
    private repoWebMouvements;
    constructor(repoWebPorteurs: Repository<WebPorteurs>, repoParamListeTailles: Repository<ParamListeTailles>, repoWebMouvements: Repository<WebMouvements>);
    getFilterData(refacteurWdotporteur: number): Promise<unknown>;
    search(query: InterfaceQuery, refacteur_wdotporteur: number, dataSearch: search): Promise<unknown>;
    getPorteurByID(id: number): Promise<WebPorteurs>;
    updateTaille(newData: InterfaceUpdateTaille): Promise<any>;
    saveProd(refacteurWdotporteur: number): Promise<any>;
    getdataQRs(refacteurWmvt: number, refporteurWmvt: string): Promise<unknown>;
    private toCountData;
    private queryFunc;
    getTaillsByCategorieID(id: number): Promise<ParamListeTailles[]>;
    private queryFilterMaker;
    private addTailleOptions;
}
