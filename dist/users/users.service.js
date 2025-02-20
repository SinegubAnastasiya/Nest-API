"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_1 = require("../storage/users");
let UsersService = class UsersService {
    getAllItems() {
        if (!users_1.default.length)
            throw new Error("The database is empty");
        return users_1.default;
    }
    postItem(obj) {
        this.isValidUser(obj);
        if (!obj.username || !obj.email || !obj.password)
            throw new Error("Incorrect values");
        const newId = users_1.default.length + 1;
        users_1.default.push({ ...obj, id: newId });
        return users_1.default;
    }
    updateItem(obj, id) {
        this.isValidUser(obj);
        if (!obj.username || !obj.email || !obj.password)
            throw new Error("Incorrect values");
        const elem = users_1.default.findIndex((el) => el.id === +id);
        users_1.default[elem] = { ...users_1.default[elem], ...obj };
        return users_1.default;
    }
    deleteItem(id) {
        const elem = users_1.default.findIndex((el) => el.id === +id);
        users_1.default.splice(elem, 1);
        return users_1.default;
    }
    updateItemPartly(obj, id) {
        this.isValidUser(obj);
        const elem = users_1.default.findIndex((el) => el.id === +id);
        users_1.default[elem] = { ...users_1.default[elem], ...obj };
        return users_1.default;
    }
    isValidUser(obj) {
        if (obj.username && !isNaN(+obj.username))
            throw new Error("Invalid type of name");
        if (obj.email && !isNaN(+obj.email))
            throw new Error("Invalid type of email");
        if (obj.password && !isNaN(+obj.password))
            throw new Error("Invalid type of password");
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map