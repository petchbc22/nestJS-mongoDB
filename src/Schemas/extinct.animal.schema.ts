import * as mongoose from 'mongoose';

export const extinctAnimalSchema = new mongoose.Schema(
  {
    Name: { 
        type: String, 
        unique: true, 
        required: true 
    },
    Location: String,
    ExtinctYear: Number,
    trk : [{
        lat : String,
        lng : String
         }]
  },
  {
    versionKey: false,
  },
);
