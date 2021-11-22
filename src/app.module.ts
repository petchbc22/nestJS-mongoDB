import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ExtinctAnimalsController } from './ExtinctAnimals/extinct.animals.controller';
import { extinctAnimalSchema } from './Schemas/extinct.animal.schema';
import { UserSchema } from './Schemas/users.schema';
import { ExtinctAnimalService } from './Services/extinct.animal.service';
import { UsersService } from './Services/users.service';
import { UserController } from './ExtinctAnimals/users.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/MyWorldDatabase'),
    MongooseModule.forFeature([
      {
        name: 'ExtinctAnimals',
        schema: extinctAnimalSchema,
        collection: 'ExtinctAnimals',
      },
      {
        name: 'Users',
        schema: UserSchema,
        collection: 'Users',
      },
    ]),
  ],
  controllers: [AppController, ExtinctAnimalsController,UserController],
  providers: [AppService, ExtinctAnimalService,UsersService],
})
export class AppModule {}
