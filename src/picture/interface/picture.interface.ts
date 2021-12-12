import { Document } from "mongoose";

export interface pictureInter extends Document {

    readonly pictureUrl : string;
    readonly title : string;
    readonly  price : number

}