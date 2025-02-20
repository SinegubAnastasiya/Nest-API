import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Patch,
} from "@nestjs/common";
import { UsersService } from "./users.service";

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

@Controller('/users')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  getItemDB(): iUser[] | string {
    try {
      return this.appService.getAllItems();
    } catch (error) {
      return error.message;
    }
  }

  @Post()
  postItemDB(@Body() obj: iBody): iUser[] | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return error.message;
    }
  }

  @Put(":id")
  updateItemDB(@Body() obj: iBody, @Param("id") id: string): iUser[] | string {
    try {
      return this.appService.updateItem(obj, id);
    } catch (error) {
      return error.message;
    }
  }

  @Delete(":id")
  deleteItemDB(@Param("id") id: string): iUser[] | string {
    try {
      return this.appService.deleteItem(id);
    } catch (error) {
      return error.message;
    }
  }

  @Patch(":id")
  updateItemPartlyDB(
    @Body() obj: Partial<iBody>,
    @Param("id") id: string,
  ): iUser[] | string {
    try {
      return this.appService.updateItemPartly(obj, id);
    } catch (error) {
      return error.message;
    }
  }
}
