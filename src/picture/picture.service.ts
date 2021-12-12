import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { pictureInter } from './interface/picture.interface';

@Injectable()
export class pictureService {

    constructor (@InjectModel('picture') private readonly pictureModel: Model<pictureInter>){}
    
    //get all pictures
    public async getpictures(){
        const pictures = await this.pictureModel.find().exec()
        if(!pictures || pictures.length === 0){

            throw new HttpException('Not found',404)

        }
        
        return pictures
    }


// add picture
    public async postpicture(picture1) {
        debugger
        const picture = await new this.pictureModel(picture1)
        return picture.save()
        
        
    }

    // find by id

    public async  getpictureById(id:String) {

        const picture = await this.pictureModel.findById(id).exec()

        if(!picture){

            throw new HttpException('Not found',404)

        }
        return picture

        
    }

    //find by artist 
    public async  search(params:String) {

        const pictures = await this.pictureModel.find({artist:params},{_id:0})
        if(!pictures || pictures.length === 0){

            throw new HttpException('Not found',404)

        }
        
        return pictures
    }
    
}
