import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users')
    private readonly userModel: Model<any>,
  ) {}
  async getAll() {
    return await this.userModel.find();
  }
  async findOne(Name: string) {
    return this.userModel.findOne({Name});
  }
  async create(user){
    const createUser = new this.userModel(user);
    return await createUser.save();
  }
  async update(user){
    await this.userModel.updateOne({_id:user._id},user);
  }
  async delete(id){
    console.log(id)
    await this.userModel.deleteOne({_id :id});
  }
}
