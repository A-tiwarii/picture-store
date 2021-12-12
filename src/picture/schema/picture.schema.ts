import * as mongoose from 'mongoose';

export const pictureSchema = new mongoose.Schema({
    artist : String,
    picturePath: String,
    title : String,
    price : Number
})