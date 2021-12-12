import { Body, Controller, Get, Param, Post,Query,UploadedFile, UseInterceptors } from '@nestjs/common';
import { pictureService } from './picture.service';
import { pictureDto } from './picture.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname } from 'path'
import { query } from 'express';

@Controller('picture')

export class pictureController {

    constructor(private pictureService : pictureService){}

    @Get()
    getpictures(){
        return this.pictureService.getpictures()
    }


    //upload picture with body
    
    @Post('upload') 
    @UseInterceptors(FileInterceptor(
        "picture",{
            storage: diskStorage({
              destination: './uploads'
              , filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${extname(file.originalname)}`)
              }
            })
          }
    ))


    postpicture(@UploadedFile() file,@Body() body ){


      const picturePath = file.path;
      const title = body.title;
      const artist = body.artist
      const price = Number(body.price)

        return this.pictureService.postpicture({
          picturePath,
          title,
          artist,
          price
        })


    }


    @Get(':id')

    public getpictureById(@Param('id') id : string){

      return this.pictureService.getpictureById(id)

    }

    @Get('search/:artist')
    public async search(@Param('artist') artist: string){
      
      return this.pictureService.search(artist)
    }

}
