interface iUser {
    id?: number;
    name: string;
    description: string;
}
export declare class AppService {
    getAllItems(): iUser[];
    postItem(obj: iUser): iUser;
    updateItem(obj: iUser, id: string): iUser[];
    deleteItem(id: string): iUser[];
    updateItemPartly(obj: Partial<iUser>, id: string): iUser[];
    isValidUser(obj: Partial<iUser>): void;
}
export {};
