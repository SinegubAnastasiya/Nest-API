import { Injectable } from '@nestjs/common';

const data = [
  {
    id: 1,
    name: "Object One",
    description: "This is the description for object one."
  },
  {
    id: 2,
    name: "Object Two",
    description: "This is the description for object two."
  },
  {
    id: 3,
    name: "Object Three",
    description: "This is the description for object three."
  },
  {
    id: 4,
    name: "Object Four",
    description: "This is the description for object four."
  }
];

interface iUser {
  id?: number,
  name: string,
  description: string
}

@Injectable()
export class AppService {
  getAllItems(): iUser[] {
    if (!data.length) throw new Error('The database is empty');
    return data;
  }

  postItem(obj: iUser): iUser {
    this.isValidUser(obj)
    if (!obj.name||!obj.description) throw new Error('Incorrect values')
    const newId = data.length + 1;
    data.push({ ...obj, id: newId })
    return obj;
  }

  updateItem(obj: iUser, id: string): iUser[] {
    this.isValidUser(obj)
    if (!obj.name||!obj.description) throw new Error('Incorrect values')
    const elem = data.findIndex((el) => el.id === +id);
    data[elem] = { ...data[elem], ...obj }
    return data;
  }

  deleteItem(id: string): iUser[] {
    const elem = data.findIndex((el) => el.id === +id);
    data.splice(elem, 1);
    return data;
  }

  updateItemPartly(obj: Partial<iUser>, id: string): iUser[] {
    this.isValidUser(obj)
    const elem = data.findIndex((el) => el.id === +id);
    data[elem] = { ...data[elem], ...obj }
    return data;
  }

  isValidUser(obj: Partial<iUser>) {
    if (obj.name && !isNaN(+obj.name)) throw new Error('Invalid type of name')
    if (obj.description && !isNaN(+obj.description)) throw new Error('Invalid type of description')
  }
}
