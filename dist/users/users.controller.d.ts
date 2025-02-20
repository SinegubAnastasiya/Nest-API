import { UsersService } from "./users.service";
interface iUser {
    id?: number;
    username: string;
    email: string;
    password: string;
}
interface iBody {
    username: string;
    email: string;
    password: string;
}
export declare class UsersController {
    private readonly appService;
    constructor(appService: UsersService);
    getItemDB(): iUser[] | string;
    postItemDB(obj: iBody): iUser[] | string;
    updateItemDB(obj: iBody, id: string): iUser[] | string;
    deleteItemDB(id: string): iUser[] | string;
    updateItemPartlyDB(obj: Partial<iBody>, id: string): iUser[] | string;
}
export {};
