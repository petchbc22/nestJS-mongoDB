import {Controller,Get,Post,Body, Delete,Param} from '@nestjs/common';
import {ExtinctAnimalService} from '../Services/extinct.animal.service';
@Controller('extinctanimals')
export class ExtinctAnimalsController {
  constructor(private service: ExtinctAnimalService) {}
  @Get('all')
  async GetAll() {
    return await this.service.getAll();
  }
  @Post('add')
  async create(@Body() animal: any) {
    return this.service.create(animal);
    // console.log(animal)
  }
  @Post('update')
  async Update(@Body() animal: any) {
    await this.service.update(animal);
  }
  @Delete('delete/:id')
  async Delete(@Param('id') id) {
    await this.service.delete(id);
  }
}
