import { AppService } from './app.service';
interface iUser {
    id?: number;
    name: string;
    description: string;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getItemDB(): iUser[] | string;
    postItemDB(obj: iUser): iUser | string;
    updateItemDB(obj: iUser, id: string): iUser[] | string;
    deleteItemDB(id: string): iUser[] | string;
    updateItemPartlyDB(obj: Partial<iUser>, id: string): iUser[] | string;
}
export {};
