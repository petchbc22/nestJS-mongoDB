import {Controller,Get,Post,Body, Delete,Param} from '@nestjs/common';
import { UsersService } from 'src/Services/users.service';
@Controller('users')
export class UserController {
  constructor(private service: UsersService) {}
  @Get('all')
  async GetAll() {
    return await this.service.getAll();
  }
  @Post('add')
  async create(@Body() user: any) {
    return this.service.create(user);
    // console.log(animal)
  }
  
  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.service.findOne(name);
  }

  @Post('update')
  async Update(@Body() user: any) {
    await this.service.update(user);
  }
  @Delete('delete/:id')
  async Delete(@Param('id') id) {
    await this.service.delete(id);
  }
}
