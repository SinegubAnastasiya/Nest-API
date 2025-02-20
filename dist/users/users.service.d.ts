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
export declare class UsersService {
    getAllItems(): iUser[];
    postItem(obj: iBody): iUser[];
    updateItem(obj: iBody, id: string): iUser[];
    deleteItem(id: string): iUser[];
    updateItemPartly(obj: Partial<iBody>, id: string): iUser[];
    isValidUser(obj: Partial<iUser>): void;
}
export {};
