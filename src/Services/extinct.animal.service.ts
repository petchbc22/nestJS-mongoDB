import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ExtinctAnimal } from '../Models/extinct.animals.model';

@Injectable()
export class ExtinctAnimalService {
  constructor(
    @InjectModel('ExtinctAnimals')
    private readonly extinctAnimalModel: Model<ExtinctAnimal>,
  ) {}
  async getAll() {
    return await this.extinctAnimalModel.find();
  }
  async create(animal){
    const createAnimal = new this.extinctAnimalModel(animal);
    return await createAnimal.save();
  }
  async update(animal){
    await this.extinctAnimalModel.updateOne({_id:animal._id},animal);
  }
  async delete(id){
    console.log(id)
    await this.extinctAnimalModel.deleteOne({_id :id});
  }
}
