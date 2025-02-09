import { Controller, Get, Post, Body, Put, Delete, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';

interface iUser {
  id?: number,
  name: string,
  description: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getItemDB(): iUser[] | string {
    try {
      return this.appService.getAllItems();
    } catch (error) {
      return error.message
    }
  }

  @Post()
  postItemDB(@Body() obj: iUser): iUser | string {
    try {
      return this.appService.postItem(obj);
    } catch (error) {
      return error.message
    }
  }

  @Put(':id')
  updateItemDB(@Body() obj: iUser, @Param('id') id: string): iUser[] | string {
    try {
      return this.appService.updateItem(obj, id);
    } catch (error) {
      return error.message
    }
  }

  @Delete(':id')
  deleteItemDB(@Param('id') id: string): iUser[] | string {
    try {
      return this.appService.deleteItem(id);
    } catch (error) {
      return error.message
    }
  }

  @Patch(':id')
  updateItemPartlyDB(@Body() obj: Partial<iUser>, @Param('id') id: string): iUser[] | string {
    try {
      return this.appService.updateItemPartly(obj, id);
    } catch (error) {
      return error.message
    }
  }
}
