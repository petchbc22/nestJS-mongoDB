
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ExtinctAnimalsController} from './ExtinctAnimals/extinct.animals.controller';
import { extinctAnimalSchema } from './Schemas/extinct.animal.schema';
import {ExtinctAnimalService} from './Services/extinct.animal.service';

@Module({
  imports: [
    
    MongooseModule.forRoot("mongodb://localhost/MyWorldDatabase"),MongooseModule.forFeature([{
      name:'ExtinctAnimals',
      schema:extinctAnimalSchema,
      collection:'ExtinctAnimals'
    }])
  ],
  controllers: [AppController,ExtinctAnimalsController],
  providers: [AppService,ExtinctAnimalService],
})
export class AppModule {}