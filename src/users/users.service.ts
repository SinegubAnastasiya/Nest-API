import { Injectable } from "@nestjs/common";
import users from "src/storage/users";

interface iUser {
  id?: number, 
  username: string, 
  email: string, 
  password: string
}

interface iBody {
  username: string,
  email: string,
  password: string
}

@Injectable()
export class UsersService {
  getAllItems(): iUser[] {
    if (!users.length) throw new Error("The database is empty");
    return users;
  }

  postItem(obj: iBody): iUser[] {
    this.isValidUser(obj);
    if (!obj.username || !obj.email || !obj.password) throw new Error("Incorrect values");
    const newId = users.length + 1;
    users.push({ ...obj, id: newId });
    return users;
  }

  updateItem(obj: iBody, id: string): iUser[] {
    this.isValidUser(obj);
    if (!obj.username || !obj.email || !obj.password) throw new Error("Incorrect values");
    const elem = users.findIndex((el) => el.id === +id);
    users[elem] = { ...users[elem], ...obj };
    return users;
  }

  deleteItem(id: string): iUser[] {
    const elem = users.findIndex((el) => el.id === +id);
    users.splice(elem, 1);
    return users;
  }

  updateItemPartly(obj: Partial<iBody>, id: string): iUser[] {
    this.isValidUser(obj);
    const elem = users.findIndex((el) => el.id === +id);
    users[elem] = { ...users[elem], ...obj };
    return users;
  }

  isValidUser(obj: Partial<iUser>) {
    if (obj.username && !isNaN(+obj.username)) throw new Error("Invalid type of name");
    if (obj.email && !isNaN(+obj.email)) throw new Error("Invalid type of email");
    if (obj.password && !isNaN(+obj.password)) throw new Error("Invalid type of password");
  }
}
