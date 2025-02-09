"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
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
let AppService = class AppService {
    getAllItems() {
        if (!data.length)
            throw new Error('The database is empty');
        return data;
    }
    postItem(obj) {
        this.isValidUser(obj);
        if (!obj.name || !obj.description)
            throw new Error('Incorrect values');
        const newId = data.length + 1;
        data.push({ ...obj, id: newId });
        return obj;
    }
    updateItem(obj, id) {
        this.isValidUser(obj);
        if (!obj.name || !obj.description)
            throw new Error('Incorrect values');
        const elem = data.findIndex((el) => el.id === +id);
        data[elem] = { ...data[elem], ...obj };
        return data;
    }
    deleteItem(id) {
        const elem = data.findIndex((el) => el.id === +id);
        data.splice(elem, 1);
        return data;
    }
    updateItemPartly(obj, id) {
        this.isValidUser(obj);
        const elem = data.findIndex((el) => el.id === +id);
        data[elem] = { ...data[elem], ...obj };
        return data;
    }
    isValidUser(obj) {
        if (obj.name && !isNaN(+obj.name))
            throw new Error('Invalid type of name');
        if (obj.description && !isNaN(+obj.description))
            throw new Error('Invalid type of description');
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map