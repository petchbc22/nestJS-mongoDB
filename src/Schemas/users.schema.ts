import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    Name: { 
        type: String, 
        unique: true, 
        required: true 
    },
    LastName: String,
    NickName: String,
    
  }, 
  {
    versionKey: false,
  },
);
